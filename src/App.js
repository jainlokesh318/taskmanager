import './App.css';
import TaskManager from './components/TaskManager';
import { db } from "./services/firebase.config";
import { collection } from 'firebase/firestore'
export const collectionRef = collection(db, 'taskManager');

function App() {
  return (
    <TaskManager />
  );
}

export default App;
