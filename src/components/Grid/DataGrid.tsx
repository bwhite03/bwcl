import React, { useState, useEffect, useRef } from "react";
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

  const { fill, tableClassName = "mikto-table" } = props;
  const table = useRef<HTMLTableElement>(null);
  let draggedId = "";

  useEffect(() => {
    setFilteredData(props.data);
  }, []);

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
          <span style={{ width: "80%" }}>{title}</span>
          <span
            style={{ width: "20%", float: "right", textAlign: "center" }}
            className={`mikto-grid-chevron-down`}
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
                <td style={style} key={`table-td-${id}`}>
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
    <div className={props.className}>
      <table ref={table} className={props.tableClassName} id={props.identifier}>
        <thead>
          <tr>{props.headers.map(renderHeader)}</tr>
        </thead>
        <tbody>{filteredData.map(renderRow)}</tbody>
      </table>
      <div id={`mikto-column-${props.identifier}`}></div>
    </div>
  );
}

export default DataGrid;
