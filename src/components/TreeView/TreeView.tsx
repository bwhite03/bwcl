// @ts-nocheck
import React, { useState } from 'react';
import './treeview.css';

export interface TreeViewProps<T> {
  data: T;
  toggled?: boolean;
  name: string | null;
  isLast: boolean;
  isChildElement: boolean;
  isParentToggled: boolean | undefined;
}

function TreeView<T>(props: TreeViewProps<T>) {
  const { data, toggled, name, isLast, isChildElement, isParentToggled } =
    props;
  const [isToggled, setIsToggled] = useState(toggled);
  const isDataArray = Array.isArray(data);

  return (
    <div
      className={`tree-element ${isParentToggled && 'collapsed'} ${
        isChildElement && 'is-child'
      }`}
    >
      <span
        className={isToggled ? 'toggler' : 'toggler closed'}
        onClick={() => setIsToggled(isToggled)}
      >
        {name ? (
          <strong>&nbsp;&nbsp;{name}:</strong>
        ) : (
          <span>&nbsp;&nbsp;</span>
        )}
        {isDataArray ? '[' : '{'}
        {isToggled && '...'}
        {Object.keys(data).map((v, i: number, a) =>
          typeof data[v] === 'object' ? (
            <TreeView
              key={`${name}-${v}-${i}`}
              data={data[v]}
              isLast={i === a.length - 1}
              name={isDataArray ? null : v}
              isChildElement
              isParentToggled={isParentToggled && isToggled}
            />
          ) : (
            <p
              key={`${name}-${v}-${i}`}
              className={isToggled ? 'tree-element' : 'tree-element collapsed'}
            >
              {isDataArray ? '' : <strong>{v}</strong>}
              {data[v]}
              {i === a.length - 1 ? '' : ','}
            </p>
          )
        )}
        {isDataArray ? ']' : '}'}
        {!isLast ? ',' : ''}
      </span>
    </div>
  );
}

export default TreeView;
