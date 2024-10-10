import { useEffect, useState } from "react";
import { useGroupingAndOrdering } from "./context";
import { Dashboard, Navbar } from "./components";
import "./App.css";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const { setGrouping, setOrdering, grouping, ordering } =
    useGroupingAndOrdering();

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_ENDPOINT);
        const { tickets, users } = await response.json();
        console.log(tickets);
        setTasks(tickets);
        setUsers(users);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
      const storedGrouping = localStorage.getItem("grouping");
      const storedOrdering = localStorage.getItem("ordering");
      if (storedGrouping) {
        setGrouping(storedGrouping);
      }
      if (storedOrdering) {
        setOrdering(storedOrdering);
      }
    };
    fetchApiData();
  }, []);

  if (loading) {
    return <Navbar />;
  }

  return (
    <div className="App">
      <Navbar />
      <Dashboard tasks={tasks} users={users} />
    </div>
  );
}

export default App;
