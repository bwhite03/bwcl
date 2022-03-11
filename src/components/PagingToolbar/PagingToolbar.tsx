import React, { useState, useEffect } from 'react';
import Tooltip from '../Tooltip';
import { Icons } from '../Icons';
import './pagingtoolbar.css';

export interface PagingToolbarProps<T> {
  data: T[];
  currentPage: number;
  totalRecords: number;
  handlePageChange: (n: number) => void;
  recordsPerPage: number;
  handleRecordsPerPageChange: () => void;
  start: number;
  end: number;
}

const {
  previous: Previous,
  next: Next,
  backward: Backward,
  forward: Forward,
} = Icons;

const initialPagingToolBarState = {
  data: [],
  recordsPerPage: 50,
  totalPages: 50,
  currentPage: 1,
};

function PagingToolbar<T>(props: PagingToolbarProps<T>) {
  const [state, setState] = useState(initialPagingToolBarState);
  const {
    data,
    currentPage,
    totalRecords,
    handlePageChange,
    recordsPerPage,
    handleRecordsPerPageChange,
    start,
    end,
  } = props;

  useEffect(() => {
    console.log('totalRecords' + totalRecords);
    console.log('records per page' + recordsPerPage);

    let totalPages = Math.ceil(totalRecords / recordsPerPage);
    console.log(totalPages);
    if (totalPages === 0) {
      totalPages = 1;
    }

    setState({
      ...state,
      totalPages,
      recordsPerPage,
      currentPage: currentPage + 1,
    });
  }, [data, totalRecords]);

  const handleNext = () => {
    handlePageChange(state.currentPage);
  };

  const handlePrevious = () => {
    handlePageChange(state.currentPage - 2);
  };

  const handleFirst = () => {
    handlePageChange(0);
  };

  const handleLast = () => {
    handlePageChange(state.totalPages - 1);
  };

  const style = { width: '32px', height: '32px' };

  return (
    <div className="paging-toolbar-wrapper">
      <div>
        {state.currentPage === 1 ? (
          <div>
            <React.Fragment>
              <span>
                <Backward theme="dark" type="dark" style={style} />
              </span>
              <span style={{ marginLeft: '10px', marginRight: '10px' }}>
                <i className="fas fa-chevron-left"></i>
              </span>
            </React.Fragment>
          </div>
        ) : (
          <div>
            <React.Fragment>
              <Tooltip message={'First Page'} position="bottom">
                <span className="paging-button" onClick={handleFirst}>
                  <Previous theme="dark" type="dark" style={style} />
                </span>
              </Tooltip>
              <Tooltip message={'Previous Page'} position="bottom">
                <span
                  style={{ marginLeft: '10px', marginRight: '10px' }}
                  className="paging-button"
                  onClick={handlePrevious}
                >
                  <Backward theme="dark" type="dark" style={style} />
                </span>
              </Tooltip>
            </React.Fragment>
          </div>
        )}
        <span>Page</span>
        <input
          type="number"
          className="paging-toolbar-current-page"
          value={state.currentPage}
          onChange={() => console.log('change')}
        />
        <span>of {state.totalPages}</span>
        {currentPage === state.totalPages - 1 ? (
          <React.Fragment>
            <span style={{ marginLeft: '10px', marginRight: '10px' }}>
              <Next theme="dark" type="dark" style={style} />
            </span>
            <span>
              <Forward theme="dark" type="dark" style={style} />
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Tooltip message="Next Page" position="bottom">
              <span
                style={{ marginLeft: '10px', marginRight: '10px' }}
                className="paging-button"
                onClick={handleNext}
              >
                <Next theme="dark" type="dark" style={style} />
              </span>
            </Tooltip>
            <Tooltip message="Last Page" position="bottom">
              <span
                style={{ marginLeft: '10px', marginRight: '10px' }}
                className="paging-button"
                onClick={handleLast}
              >
                <Forward theme="dark" type="dark" style={style} />
              </span>
            </Tooltip>
          </React.Fragment>
        )}
      </div>
      <div>
        <span>Show</span>
        <input
          type="number"
          className="paging-records-per-page"
          value={recordsPerPage}
          onChange={handleRecordsPerPageChange}
        />
        <span>Records per Page</span>
      </div>
      <div className="paging-summary">
        <span>{`Displaying ${start} - ${end} of ${totalRecords}`}</span>
      </div>
    </div>
  );
}

export default PagingToolbar;
