import './App.css';
import { UserList } from './UserList';

function App() {

  return (
    <div className="App">
      <div className='title'>
        <h1>Liste des utilisateurs</h1>
      </div>
      <div className='userlist'>
        <UserList />
      </div>
    </div>
  );
}

export default App;
