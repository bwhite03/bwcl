// @ts-nocheck
import React from 'react';
import { isPrimitive } from '../Grid/DataGrid';

export interface TreeProps {
  json: object;
}

const Tree = (props: TreeProps) => {
  const isPrimitive = (value: any) => {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    );
  };

  const isArray = (value: any) => Array.isArray(value);

  const buildLeaf = (value: string) => (
    <li className="leaf" onClick={() => {}}>
      {value}
    </li>
  );

  const buildNode = (key: string) => (
    <span className="node" onClick={(e) => toggle(e)}>
      {key}
    </span>
  );

  const toggle = (e: React.MouseEvent) => {};

  const loopArray = (array: any) => {
    array.map((value: any, key: number) => {
      <div key={key}>
        {isPrimitive(value)
          ? buildLeaf(value)
          : isArray(value)
          ? loopArray(value)
          : processObject(value)}
      </div>;
    });
  };

  const processObject = (object: object) => {
    Object.keys(object).map((key: any, reactKey: any) => {
      return (
        <li key={key + reactKey}>
          buildNode(key);
          <ul className="nested">
            {isPrimitive(object[key])
              ? buildLeaf(object[key])
              : isArray(object[key])
              ? loopArray(object[key])
              : processObject(object[key])}
          </ul>
        </li>
      );
    });
  };

  return <ul id="myUL">processObject(props.json)</ul>;
};

export default Tree;
