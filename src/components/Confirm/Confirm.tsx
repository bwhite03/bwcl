import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './confirm.css';

export interface ConfirmProps {
  isShowing: boolean;
  hide: () => void;
  title: string;
  moreInfo?: string;
  confirmText: string;
  setSuccess: (b: boolean) => void;
}

const Confirm = (props: ConfirmProps) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const {
    isShowing,
    hide,
    title = 'Confirm Delete',
    moreInfo,
    confirmText,
    setSuccess,
  } = props;

  const compareDeleteText = () => {
    if (input === confirmText) {
      setSuccess(true);
      hide();
    } else {
      setError(`${input} does not match ${confirmText}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <React.Fragment>
      {isShowing
        ? createPortal(
            <React.Fragment>
              <div className="confirm-delete-overlay" />
              <div
                className="confirm-delete-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className="confirm-delete">
                  <div className="confirm-delete-header">
                    <span className="confirm-delete-title">{title}</span>
                    <span className="confirm-delete-close-box">
                      <button
                        type="button"
                        className="confirm-delete-close-button"
                        data-dismiss="modal"
                        aria-label="close"
                        onClick={hide}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </span>
                  </div>
                  <div className="confirm-delete-body">
                    <p>
                      Type{' '}
                      <i>
                        <b>{confirmText}</b>
                      </i>{' '}
                      in the box to confirm.
                    </p>
                    {moreInfo && moreInfo.length > 0 ? (
                      <div className="more-info">{moreInfo}</div>
                    ) : null}
                    <div>
                      <div className="form-group">
                        <input
                          type="text"
                          data-testid="confirm-input"
                          className="confirm-delete-input"
                          id="txtDeleteConfirm"
                          value={input}
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                        {error.length > 0 && (
                          <div className="confirm-delete-error">{error}</div>
                        )}
                        <div className="confirm-delete-buttons">
                          <button
                            className="confirm-delete-cancel-button"
                            onClick={hide}
                          >
                            Cancel
                          </button>
                          <button
                            className="confirm-delete-confirm-button"
                            onClick={compareDeleteText}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>,
            document.body
          )
        : null}
    </React.Fragment>
  );
};

export default Confirm;
