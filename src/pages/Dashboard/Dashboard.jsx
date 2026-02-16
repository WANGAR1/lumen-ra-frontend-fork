const Dashboard = () => {
  return (
    <div className="dashboard-container">
     <header>
      <h1>Welcome back 👋</h1>
      <p>Here's a quick look at your account today. Take a look around</p>
     </header>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Profile</h3>
          <p>View and update your profile</p>
        </div>

        <div className="card">
          <h3>Activities</h3>
          <p>See what you have been up to recently</p>
        </div>

        <div className="card">
          <h3>Settings</h3>
          <p>Manage notifications and account settings</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
