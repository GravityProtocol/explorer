import React from 'react';
import Dashboard from '../dashboard';
import RecentActivity from '../recent-activity';

function HomePage() {
  return (
    <div>
      <Dashboard />

      <div className="container">
        <div className="section">
          <div className="panel">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
