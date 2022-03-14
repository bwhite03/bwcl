// @ts-nocheck
import React, { useState } from 'react';
import { Icons } from '../Icons';

import './Tree1.css';

const style = {
  height: '18px',
  width: '18px',
  transform: 'translateY(5px)',
  marginRight: '5px',
  cursor: 'pointer',
  userSelect: 'none',
};

export interface TreeProps {
  json: object;
  style: React.CSSProperties;
}

const Tree1 = (props: TreeProps) => {
  const [collapsedNodes, setCollapsedNodes] = useState<string>([]);
  let nodeId = 0;
  const { minusBox: MinusBox, plusBox: PlusBox } = Icons;

  const isPrimitive = (value: any) => {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    );
  };

  const isArray = (value: any) => Array.isArray(value);
  const isBoolean = (value: any) => typeof value === 'boolean';
  const isString = (value: any) => typeof value === 'string';
  const isObject = (value: any) => typeof value === 'object';

  const processObject = (object: object) =>
    Object.keys(object).map((key, idx) => {
      const value = object[key];
      if (isPrimitive(object[key])) {
        return buildLeaf(object, key, idx);
      } else if (isArray(object[key])) {
        return buildArray(object, key, idx);
      }
    });

  const buildLeaf = (
    object: any,
    key: string,
    recordIdx: number,
    indentLevel = 40
  ) => {
    const value = object[key];
    return (
      <div
        key={`bl-${key}-${recordIdx}`}
        style={{ paddingLeft: `${indentLevel}px` }}
      >
        <span>{`"${key}"`}</span>
        <span style={{ marginLeft: '5px', marginRight: '5px' }}>:</span>
        <span
          style={{
            color: isBoolean(value)
              ? 'orange'
              : isString(value)
              ? 'limegreen'
              : 'white',
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

  const buildArray = (object: object, key: string, arrIdx: number) => {
    nodeId++;
    if (collapsedNodes.includes(nodeId.toString())) {
      return (
        <div id={nodeId} key={`a-${arrIdx}`} className="tree-active">
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
            onMouseOver={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
            onClick={(e) => toggleNode(e)}
          />
          <span>[{object[key].length}]</span>
        </div>
      );
    } else {
      return (
        <div id={nodeId} key={`a-${arrIdx}`} className="tree-active">
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
            onMouseOver={(e) => hoverEnter(e)}
            onMouseLeave={(e) => hoverLeave(e)}
            onClick={(e) => toggleNode(e)}
          />
          <span>[</span>
          <div>
            {isObject(object[key])
              ? processArrayObject(object[key], key)
              : null}
          </div>
          <div style={{ paddingLeft: '30px' }}>]</div>
        </div>
      );
    }
  };

  const processArrayObject = (object: object, key: string) => {
    const value = object[key];
    return (
      <div id={`aodiv-${key}`} style={{ transform: 'translateX(20px)' }}>
        {object.map((record, idx) => {
          nodeId++;
          if (collapsedNodes.includes(nodeId.toString())) {
            return (
              <div id={nodeId} className="tree-active" key={`ao-${idx}-${key}`}>
                <MinusBox
                  theme="dark"
                  type="dark"
                  style={{
                    height: '18px',
                    width: '18px',
                    useSelect: 'none',
                    cursor: 'pointer',
                    transform: 'translateY(5px) translateX(40px)',
                  }}
                  onMouseOver={(e) => hoverEnter(e)}
                  onMouseLeave={(e) => hoverLeave(e)}
                  onClick={(e) => toggleNode(e)}
                />
                <span style={{ paddingLeft: '45px' }}>&#123;...&#125;</span>
              </div>
            );
          } else {
            return (
              <div id={nodeId} className="tree-active" key={`ao-${idx}-${key}`}>
                <MinusBox
                  theme="dark"
                  type="dark"
                  style={{
                    height: '18px',
                    width: '18px',
                    useSelect: 'none',
                    cursor: 'pointer',
                    transform: 'translateY(5px) translateX(40px)',
                  }}
                  onMouseOver={(e) => hoverEnter(e)}
                  onMouseLeave={(e) => hoverLeave(e)}
                  onClick={(e) => toggleNode(e)}
                />
                <span style={{ paddingLeft: '45px' }}>&#123;</span>
                {Object.keys(record).map((r, i) => {
                  return buildLeaf(record, r, idx, 60);
                })}
                <div style={{ paddingLeft: '40px' }}>&#125;</div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  const hoverEnter = (e: React.MouseEvent) => {
    e.target.parentElement.style.opacity = '0.6';
    //e.target.parentElement.style.color = 'red';
  };

  const hoverLeave = (e: React.MouseEvent) => {
    e.target.parentElement.style.opacity = '1';
    //e.target.parentElement.style.color = 'white';
  };

  const toggle = (e: React.MouseEvent) => {
    try {
      const child = e.target.parentElement.querySelector('.tree-active');
      if (child === null) {
        child = e.target.parentElement;
      }
      console.log(`child: ${child.id} has been clicked`);
      // child.classList.toggle('tree-nested');
      if (collapsedNodes.includes(child.id)) {
        const newArray = collapsedNodes.filter((n) => n !== child.id);
        setCollapsedNodes(newArray);
      } else {
        setCollapsedNodes([...collapsedNodes, child.id]);
      }
    } catch (error) {}
  };

  const toggleNode = (e: React.MouseEvent) => {
    try {
      const child = e.target.parentElement;
      if (collapsedNodes.includes(child.id)) {
        const newArray = collapsedNodes.filter((n) => n !== child.id);
        setCollapsedNodes(newArray);
      } else {
        setCollapsedNodes([...collapsedNodes, child.id]);
      }
    } catch (error) {}
  };

  return (
    <div className="mcl-treeview" style={props.style}>
      <ul id="c5UL">
        <div style={{ display: 'block' }} id="c5UL-master-min">
          {collapsedNodes.includes('tree-root') ? (
            <div id="tree-root">
              <PlusBox
                theme="dark"
                type="dark"
                style={style}
                onMouseOver={(e) => hoverEnter(e)}
                onMouseLeave={(e) => hoverLeave(e)}
                onClick={(e) => toggle(e)}
              />
              [1]
            </div>
          ) : (
            <div style={{ display: 'block' }} id="c5UL-master-max">
              <MinusBox
                theme="dark"
                type="dark"
                style={style}
                onMouseOver={(e) => hoverEnter(e)}
                onMouseLeave={(e) => hoverLeave(e)}
                onClick={(e) => toggle(e)}
              />
              [
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
                  onMouseOver={(e) => hoverEnter(e)}
                  onMouseLeave={(e) => hoverLeave(e)}
                  onClick={(e) => toggle(e)}
                />

                <div className="tree-active" id="0">
                  <div
                    style={{
                      paddingLeft: '30px',
                      transform: 'translateY(3px)',
                    }}
                  >
                    &#123;
                  </div>
                  {processObject(props.json)}
                  <div style={{ paddingLeft: '10px' }}>&#125;</div>
                </div>
              </div>
              <div>]</div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Tree1;
