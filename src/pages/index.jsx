import React from 'react';
import Dashboard from '../components/dashboard';
import RecentActivity from '../components/recent-activity';

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
