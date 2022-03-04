import React, { useState, useEffect, useRef } from "react";
import Columns from "./Columns/Columns";
import Filter from "./Filter/Filter";
import "./datagrid.css";

export type CustomRenderers<T> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

export type PrimitiveType = string | symbol | number | boolean;

export function isPrimitive(value: unknown): value is PrimitiveType {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  );
}

export type TableHeader<T> = {
  columnName: keyof T;
  title: string;
  sortable?: "asc" | "desc" | false;
  visible?: boolean;
  style?: React.CSSProperties;
  width?: number;
  filterable?: boolean;
};

export type Mode = "light" | "dark";

export interface TableProps<T> {
  data: T[];
  identifier: string;
  customRenderers?: CustomRenderers<T>;
  headers: TableHeader<T>[];
  fill?: boolean;
  style?: React.CSSProperties;
  className?: string;
  tableClassName?: string;
  mode?: Mode;
}

export function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

export function DataGrid<T>(props: TableProps<T>) {
  const [render, setRender] = useState(false);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [selectedHeader, setSelectedHeader] = useState<TableHeader<T>>();
  const [columnModalStyle, setColumnModalStyle] = useState({});
  const [showColumnsModal, setShowColumnsModal] = useState(false);
  const [checkedColumns, setCheckedColumns] = useState<string[]>([]);
  const [filterChecked, setFilterChecked] = useState(false);
  const [filterColumn, setFilterColumn] = useState<string>("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterStyle, setFilterStyle] = useState<React.CSSProperties>({
    position: "absolute",
  });
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
  const [headerString, setHeaderString] = useState("");

  const { fill, tableClassName = "mikto-table", style, mode = "dark" } = props;
  const table = useRef<HTMLTableElement>(null);
  let draggedId = "";

  useEffect(() => {
    setFilteredData(props.data);

    const stylesheet = document.styleSheets[0];
    try {
      let oddBackgroundColor = "#aaa";
      if (mode === "dark") {
        if (table.current) {
          table.current.style.backgroundColor = "#000";
        }
        stylesheet.deleteRule(1);
        stylesheet.deleteRule(2);
        let rule = ".mikto-table-row:nth-child(odd) {background-color: #000;}";

        stylesheet.insertRule(rule, 1);
      } else {
        if (table.current) {
          table.current.style.backgroundColor = "#fff";
        }
      }

      let rule = ".mikto-table-row:nth-child(odd) {background-color: #aaa;}";
      stylesheet.insertRule(rule, 1);
      rule = ".mikto-table-row:nth-child(even) {background-color: #fff;}";
      stylesheet.insertRule(rule, 2);
    } catch {}

    return () => {
      try {
        stylesheet.deleteRule(1);
        stylesheet.deleteRule(2);
      } catch {}
    };
  }, [mode]);

  const sortByProperty = (prop: keyof T, asc = 0) => {
    if (!asc) {
      return (a: T, b: T) =>
        a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
    } else {
      return (b: T, a: T) =>
        a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
    }
  };

  const handleSortClick = (e: React.MouseEvent, columnName: keyof T) => {
    const header = props.headers.find((h) => h.columnName === columnName);
    if (header) {
      if (!header.sortable) {
        header.sortable = "asc";
      }
      if (header.sortable === "asc") {
        header.sortable = "desc";
        const sortedData = props.data.sort(sortByProperty(columnName, 0));
        setFilteredData(sortedData);
      } else {
        header.sortable = "asc";
        const sortedData = props.data.sort(sortByProperty(columnName, 1));
        setFilteredData(sortedData);
      }
      setRender(!render);
    }
  };

  const handleModal = (
    e: React.MouseEvent<HTMLSpanElement>,
    divid: string,
    header: TableHeader<T>
  ) => {
    e.preventDefault();
    const div = document.getElementById(divid);
    setSelectedHeader(header);

    if (div && table.current) {
      const rect = div.getBoundingClientRect();
      const tableRect = table.current.getBoundingClientRect();
      if (rect && tableRect) {
        const left = e.clientX.toFixed(0).toString() + "px";
        const top =
          (rect.top - tableRect.top + 50).toFixed(0).toString() + "px";
        const style = {
          position: "absolute",
          top: top,
          left: left,
        };
        setColumnModalStyle(style);
        setShowColumnsModal(!showColumnsModal);
      }
    }
  };

  const handleColumnCheck = (e: string, checked: boolean) => {
    const header = props.headers.filter((h) => h.title === e)[0];
    if (checked) {
      setCheckedColumns([...checkedColumns, e]);
      header.visible = true;
    } else {
      const newArray = checkedColumns.filter((c) => c !== e);
      setCheckedColumns(newArray);
      header.visible = false;
    }
  };

  const handleFilterClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    header: string,
    divId: string
  ) => {
    const div = document.getElementById(divId);
    // setSelectedHeader(header);
    setHeaderString(header);

    if (div && table.current) {
      const rect = div.getBoundingClientRect();
      const tableRect = table.current.getBoundingClientRect();
      if (rect && tableRect) {
        const left = (rect.left + rect.width - 75).toFixed(0).toString() + "px";
        const top =
          (rect.top - tableRect.top + 50).toFixed(0).toString() + "px";
        const style = {
          position: "absolute",
          top: top,
          left: left,
        };
        setFilterStyle({
          position: "absolute",
          zIndex: "5",
          left: left,
          top: top,
          backgroundColor: "#aaa",
          padding: "8px",
        });
        setShowFilter(!showFilter);
      }
    }
  };

  const dragStart = (ev: React.DragEvent<HTMLDivElement>) => {
    const id = (ev.target as HTMLDivElement).id;
    ev.dataTransfer.setData("text/plain", id);
    draggedId = id;
  };

  const dragEnter = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    const id = (ev.target as HTMLDivElement).id;
    if (id) {
      (ev.target as HTMLDivElement).classList.add("mikto-table-drag-over");
    }
  };

  const dragOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    const id = (ev.target as HTMLDivElement).id;
    if (id) {
      (ev.target as HTMLDivElement).classList.add("mikto-table-drag-over");
    }
  };

  const dragLeave = (ev: React.DragEvent<HTMLDivElement>) => {
    (ev.target as HTMLDivElement).classList.remove("mikto-table-drag-over");
  };

  const drop = (ev: React.DragEvent<HTMLDivElement>) => {
    (ev.target as HTMLDivElement).classList.remove("mikto-table-drag-over");
    const id = ev.dataTransfer.getData("text/plain");
    const originalPosition = id.slice(id.length - 1);
    const header = props.headers[+originalPosition];
    props.headers.splice(+originalPosition, 1);

    //get the x position of dropped element
    const dropElementX = ev.clientY;
    const draggable = document.getElementById(id);
    if (draggable) {
      draggable.classList.remove("mikto-hide-dragged-column");
    }

    const table = document.getElementById(props.identifier);
    if (table) {
      const thead = table.querySelector("thead");
      if (thead) {
        const tr = thead.querySelector("tr");
        if (tr) {
          for (let i = 0; i < tr.childNodes.length; i++) {
            const el = tr.childNodes[i];
            const id = (el as HTMLDivElement).id;
            if (id === draggedId) {
              continue;
            }
            if (el) {
              const x1 =
                (el as HTMLElement).getBoundingClientRect().x +
                (el as HTMLElement).getBoundingClientRect().width / 2;
              const x2 =
                (el as HTMLElement).getBoundingClientRect().x +
                (el as HTMLElement).getBoundingClientRect().width;

              if (dropElementX <= x1) {
                const newPosition = (el as HTMLElement).id.slice(
                  (el as HTMLElement).id.length - 1
                );
                props.headers.splice(+newPosition, 0, header);
                setRender(!render);
                draggedId = "";
                break;
              } else if (dropElementX <= x2) {
                if (draggable) {
                  const newPosition = (el as HTMLElement).id.slice(
                    (el as HTMLElement).id.length - 1
                  );
                  props.headers.splice(+newPosition, 0, header);
                  setRender(!render);
                  draggedId = "";
                  break;
                }
              }
            }
          }
        }
      }
    }
  };

  function renderHeader(header: TableHeader<T>, id: number) {
    const { title, visible = true } = header;
    if (!visible === false) {
      return (
        <th
          draggable
          key={`table-header-${id}`}
          id={`table-header-${props.identifier}-${id}`}
          style={header.style}
          className="mikto-header-sort"
          onContextMenu={(e) =>
            handleModal(e, `table-header-${props.identifier}-${id}`, header)
          }
          onDragStart={dragStart}
        >
          <span
            style={{ width: "80%", cursor: "pointer" }}
            onClick={(e) => handleSortClick(e, header.columnName)}
          >
            {title}
          </span>
          <span
            style={{ width: "20%", float: "right", textAlign: "center" }}
            className={`mikto-grid-chevron down`}
            onClick={(e) =>
              handleFilterClick(
                e,
                header.columnName as string,
                `table-header-${props.identifier}-${id}`
              )
            }
          ></span>
        </th>
      );
    } else {
      return;
    }
  }

  function renderRow(item: T, id: number) {
    return (
      <tr key={`table-row-${id}`} className="mikto-table-row">
        {objectKeys(item).map((itemProperty, i) => {
          if (props.headers[i]) {
            const { visible = true } = props.headers[i];
            if (!visible === false) {
              const customRenderer = props.customRenderers?.[itemProperty];
              const style = props.headers[i].style;

              if (customRenderer) {
                return (
                  <td style={style} key={`table-td-${i}`}>
                    {customRenderer(item)}
                  </td>
                );
              }

              return (
                <td style={style} key={`table-td-${i}`}>
                  {isPrimitive(item[itemProperty]) ? item[itemProperty] : ""}
                </td>
              );
            }
          }
        })}
      </tr>
    );
  }

  const handleFilterItemClick = (
    checked: boolean,
    r: string,
    headerString: string
  ) => {
    if (checked) {
      setFilterColumn(headerString);
      if (!checkedFilters.includes(r)) {
        checkedFilters.push(r);
        if (headerString.length > 0) {
          const newData = props.data.filter((d) =>
            // @ts-ignore
            checkedFilters.includes(d[headerString])
          );
          setFilteredData(newData);
        }
      }
    } else {
      const newFilters = checkedFilters.filter((f) => f !== r);

      if (newFilters.length === 0) {
        setFilteredData(props.data);
      } else {
        if (headerString.length > 0) {
          const newData = props.data.filter((d) =>
            // @ts-ignore
            newFilters.includes(d[headerString])
          );
          setFilteredData(newData);
        }
      }
      setCheckedFilters(newFilters);
    }
  };

  return (
    <div className={props.className} style={{ ...style, width: "100%" }}>
      <table
        ref={table}
        style={{ width: "100%" }}
        className={props.tableClassName}
        id={props.identifier}
      >
        <thead
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDragEnter={dragEnter}
          onDrop={drop}
        >
          <tr>{props.headers.map(renderHeader)}</tr>
        </thead>
        <tbody>{filteredData.map(renderRow)}</tbody>
      </table>
      <div id={`mikto-columns-${props.identifier}`}></div>
      <div id={`mikto-filter-${props.identifier}`}></div>
      <Columns
        open={showColumnsModal}
        divId={`mikto-columns-${props.identifier}`}
        style={columnModalStyle as React.CSSProperties}
        headers={props.headers as unknown as string[]}
        checkedColumns={checkedColumns}
        handleCheckClick={handleColumnCheck}
        // @ts-ignore
        header={selectedHeader}
        identifier={props.identifier}
        data={props.data}
      />
      <Filter
        header={headerString}
        open={showFilter}
        divId={`mikto-filter-${props.identifier}`}
        data={props.data}
        style={filterStyle}
        availableFilters={checkedFilters}
        filterItemClicked={handleFilterItemClick}
      />
    </div>
  );
}

export default DataGrid;
