import React from 'react';

function AccountHeader() {
  return (
    <div>
      <div className="toolbar">
        <div className="container">
          <div className="toolbar__inner">
            <div className="toolbar__header">
              <div className="inline inline_md">
                <div className="inline__item">
                  <h1 className="toolbar__title">committee-account</h1>
                </div>
                <div className="inline__item">
                  <span className="badge badge_extragray">Lifetime Member</span>
                </div>
              </div>
            </div>
            <div className="toolbar__footer">
              ID: 1.2.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountHeader;
