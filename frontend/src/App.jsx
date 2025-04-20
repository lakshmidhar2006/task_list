import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Task List</Link>
        <Link to="/create">Create Task</Link>
      </nav>
      <Routes>
  <Route path="/" element={<TaskList />} />
  <Route path="/create" element={<TaskForm />} />
  <Route path='/edit/:id' element={<TaskForm/>}></Route> 
</Routes>
<p>gghfugjg</p>
    </Router>
  );
}

export default App;
