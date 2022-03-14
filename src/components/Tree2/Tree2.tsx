// @ts-nocheck
import React, { useState } from 'react';
import { isPrimitive } from '../Grid/DataGrid';
import { Icons } from '../Icons';
import './Tree2.css';

const style = {
  height: '18px',
  width: '18px',
  transForm: 'translateY(5px)',
  marginRight: '5px',
  cursor: 'pointer',
  userSelect: 'none',
};

export interface Tree2Props {
  json: object;
  style: React.CSSProperties;
}

const Tree2 = (props: Tree2Props) => {
  const [collapsedNodes, setCollapsedNodes] = useState<string[]>([]);
  const [collapseAll, setCollapseAll] = useState(false);

  let nodeId = 0;
  const { minusBox: MinusBox, plusBox: PlusBox } = Icons;

  const isArray = (value: any) => Array.isArray(value);
  const isBoolean = (value: any) => typeof value === 'boolean';
  const isString = (value: any) => typeof value === 'string';
  const isObject = (value: any) => typeof value === 'object';

  const handleCollapseParent = () => {
    setCollapseAll(!collapseAll);
  };

  const handleCollapseChildren = (
    e: React.MouseEvent<HTMLElement>,
    nodeId: number
  ) => {
    if (collapsedNodes.includes(nodeId)) {
      const filteredNodes = collapsedNodes.filter((number) => {
        return number !== nodeId;
      });
      setCollapsedNodes(filteredNodes);
    } else {
      setCollapsedNodes([...collapsedNodes, nodeId]);
    }
  };

  const includesNodeId = (nodeId: number) => {
    return collapsedNodes.includes(nodeId);
  };

  const processObject = (object: object) =>
    Object.keys(object).map((key, idx) => {
      const value = object[key];
      if (isPrimitive(value)) {
        return buildLeaf(object, key, idx);
      } else if (isArray(value)) {
        return buildArray(object, key, idx);
      }
    });

  const buildArray = (object: object, key: string, arrIdx: number) => {
    nodeId++;

    return (
      <div
        id={nodeId}
        key={`a-${arrIdx}`}
        className={includesNodeId(nodeId) ? 'tree-nested' : 'tree-active'}
      >
        <span style={{ paddingLeft: '40px' }}>{`"${key}"`}</span>
        <MinusBox
          theme="dark"
          type="dark"
          style={{
            height: '18px',
            width: '18px',
            userSelect: 'none',
            cursor: 'pointer',
            marginRight: '20px',
            transform: 'translateY(5px) translateX(10px)',
          }}
          onClick={(e) => handleCollapseChildren(e, nodeId)}
          onMouseOver={(e) => hoverEnter(e)}
          onMouseLeave={(e) => hoverLeave(e)}
        />
        <span>[</span>
        {isObject(object[key]) ? processArrayObject(object[key], key) : null}
        <div style={{ paddingLeft: '30px' }}>]</div>
      </div>
    );
  };

  const processArrayObject = (object: object, key: string) => {
    const value = object[key];

    return (
      <div
        id={`aodiv-${key}`}
        style={{ transform: 'translateX(20px)' }}
        key={`aodiv-${key}`}
      >
        {object.map((record, idx) => {
          nodeId++;
          return (
            <div
              id={nodeId}
              className={includesNodeId(nodeId) ? 'tree-nested' : 'tree-active'}
              key={`ao-${idx}-${key}`}
            >
              <MinusBox
                theme="dark"
                type="dark"
                style={{
                  height: '18px',
                  width: '18px',
                  userSelect: 'none',
                  cursor: 'pointer',
                  transform: 'translateY(5px) translateX(4px)',
                }}
                onMouseOver={(e) => hoverEnter(e)}
                onMouseLeave={(e) => hoverLeave(e)}
                onClick={(e) => handleCollapseChildren(e, nodeId)}
              />
              <span style={{ paddingLeft: '45px' }}>&#123;</span>
              {Object.keys(record).map((r, idx) => {
                return buildLeaf(record, r, idx, 60);
              })}
              <div style={{ paddingLeft: '40px' }}>&#123;</div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildLeaf = (
    object: object,
    key: string,
    idx: number,
    indentLevel = 40
  ) => {
    const value = object[key];
    return (
      <div key={`bl-${key}-${idx}`} style={{ paddingLeft: `${indentLevel}px` }}>
        <span>{`"${key}"`}</span>
        <span style={{ marginLeft: '5px', marginRight: '5px' }}> :</span>
        <span
          style={{
            color: isBoolean(value)
              ? 'orange'
              : isString(value)
              ? 'limegreen'
              : 'whitesmoke',
          }}
        >
          {isBoolean(value)
            ? value.toString()
            : isString(value)
            ? `"${value}"`
            : value}
        </span>
      </div>
    );
  };

  const hoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target.parentElement.style.opacity = '0.6';
  };

  const hoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target.parentElement.style.opacity = '1';
  };

  return (
    <div className="bwcl-treeview" style={props.style}>
      <ul id="bwUL">
        <div style={{ display: 'block' }} id="bwUL-master">
          <MinusBox
            theme="dark"
            type="dark"
            style={style}
            onClick={handleCollapseParent}
            onMouseEnter={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
          />
          [
          {collapseAll === false ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1px 1fr',
                marginTop: '5px',
              }}
            >
              <MinusBox
                theme="dark"
                type="dark"
                style={{
                  height: '18px',
                  width: '18px',
                  paddingLeft: '10px',
                  transform: 'translateY(5px)',
                  marginRight: '5px',
                  cursor: 'pointer',
                  userSelect: 'none',
                  zIndex: '999',
                }}
                onMouseEnter={(e) => hoverEnter(e)}
                onMouseLeave={(e) => hoverLeave(e)}
                onClick={(e) => handleCollapseChildren(e, 0)}
              />
              <div
                className={includesNodeId(0) ? 'tree-nested' : 'tree-active'}
                id="0"
              >
                <div
                  style={{ paddingLeft: '30px', transform: 'translateY(4px)' }}
                >
                  &#123;
                </div>
                {processObject(props.json)}
                <div style={{ paddingLeft: '10px' }}>&#125;</div>
              </div>
            </div>
          ) : (
            '...'
          )}
          ]
        </div>
      </ul>
    </div>
  );
};

export default Tree2;
