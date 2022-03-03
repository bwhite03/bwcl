import React, { useState, useEffect, useRef } from "react";
import Columns from "./Columns/Columns";
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

export interface TableProps<T> {
  data: T[];
  identifier: string;
  customRenderers?: CustomRenderers<T>;
  headers: TableHeader<T>[];
  fill?: boolean;
  style?: React.CSSProperties;
  className?: string;
  tableClassName?: string;
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

  const { fill, tableClassName = "mikto-table", style } = props;
  const table = useRef<HTMLTableElement>(null);
  let draggedId = "";

  useEffect(() => {
    setFilteredData(props.data);

    const stylesheet = document.styleSheets[0];
    let rule = ".mikto-table-row:nth-child(odd) {background-color: #aaa;}";
    stylesheet.insertRule(rule, 1);
    rule = ".mikto-table-row:nth-child(even) {background-color: #fff;}";
    stylesheet.insertRule(rule, 2);
    return () => {
      stylesheet.removeRule(1);
      stylesheet.removeRule(2);
    };
  }, []);

  const sortByProperty = (prop: keyof T, asc = 0) => {
    if (!asc) {
      return (a: T, b: T) =>
        a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
    } else {
      return (b: T, a: T) =>
        a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
    }
  };

  const handleSortClick = (columnName: keyof T) => {
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

  const handleModal = (divid: string, header: TableHeader<T>) => {
    const div = document.getElementById(divid);
    setSelectedHeader(header);
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
        >
          <span
            style={{ width: "80%", cursor: "pointer" }}
            onClick={() => handleSortClick(header.columnName)}
          >
            {title}
          </span>
          <span
            style={{ width: "20%", float: "right", textAlign: "center" }}
            className={`mikto-grid-chevron down`}
            onClick={() =>
              handleModal(`table-header-${props.identifier}-${id}`, header)
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

  return (
    <div className={props.className} style={{ ...style, width: "100%" }}>
      <table
        ref={table}
        className={props.tableClassName}
        id={props.identifier}
        style={{ width: "100%" }}
      >
        <thead>
          <tr>{props.headers.map(renderHeader)}</tr>
        </thead>
        <tbody>{filteredData.map(renderRow)}</tbody>
      </table>
      <div id={`mikto-column-${props.identifier}`}></div>
      <Columns
        open={showColumnsModal}
        divId={`mikto-column-${props.identifier}`}
        style={columnModalStyle as React.CSSProperties}
        headers={props.headers as unknown as string[]}
        checkedColumns={checkedColumns}
        handleCheckClick={handleColumnCheck}
        // @ts-ignore
        header={selectedHeader}
        identifier={props.identifier}
        data={props.data}
      />
    </div>
  );
}

export default DataGrid;
