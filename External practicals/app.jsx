import React, { useState } from 'react';

function App() {
  const [username] = useState("Sharma");

  return (
    <div>
      <h1>App</h1>
      <Header username={username} />
    </div>
  );
}

function Header({ username }) {
  return (
    <header>
      <h2>Header</h2>
      <Icon username={username} />
    </header>
  );
}

function Icon({ username }) {
  return (
    <div>
      <h3>Icon</h3>
      <UserProfile username={username} />
    </div>
  );
}

function UserProfile({ username }) {
  return (
    <div>
      <h4>UserProfile</h4>
      <p>user : {username}</p>
    </div>
  );
}

export default App;
