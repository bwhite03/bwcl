import React, { useState, useEffect } from "react";
import { TableHeader } from "../DataGrid";
import { createPortal } from "react-dom";
import "./filter.css";

export interface FilterProps<T> {
  header: string;
  open: boolean;
  divId: string;
  data: T[];
  style: React.CSSProperties;
  filterItemClicked: (checked: boolean, item: string, s: string) => void;
  availableFilters: string[];
}

function Filter<T>(props: FilterProps<T>) {
  const [uniques, setUniques] = useState<string[]>();
  const {
    open,
    divId,
    data,
    header,
    style,
    availableFilters,
    filterItemClicked,
  } = props;

  const div = document.getElementById(divId);

  useEffect(() => {
    // @ts-ignore
    Array.prototype.unique = function (field: string) {
      const newArray: string[] = [];
      this.forEach((record) => {
        const { [field]: targetField } = record;
        if (!newArray.includes(targetField)) {
          newArray.push(targetField);
        }
      });

      return newArray;
    };
    // @ts-ignore
    setUniques(data.unique(header));
  }, []);

  const amIChecked = (v: string) => {
    return availableFilters.includes(v);
  };

  if (open && div) {
    return createPortal(
      <div style={style}>
        <div className="mikto-table-filters-header">Filters</div>
        {uniques &&
          uniques.map((r: string, i: number) => (
            <div
              key={`mikto-table-filter-${i}`}
              className="mikto-table-filter-item"
            >
              <input
                className="mikto-table-filter-checkbox"
                type="checkbox"
                checked={amIChecked(r)}
                onChange={(e) =>
                  filterItemClicked(e.target.checked, r, header as string)
                }
              />
              <span className="mikto-table-filter-table">{r}</span>
            </div>
          ))}
      </div>,
      div
    );
  } else {
    return null;
  }
}

export default Filter;
