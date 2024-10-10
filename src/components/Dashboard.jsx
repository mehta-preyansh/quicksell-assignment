import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGroupingAndOrdering } from "../context";
import Column from "./Column";

const Dashboard = ({ loading, tasks, users }) => {
  const { grouping, ordering } = useGroupingAndOrdering();
  const [groupedCards, setGroupedCards] = useState([]);

  const sortTasks = (cards) => {
    return cards.sort((a, b) => {
      if (ordering === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return b.priority - a.priority;
      }
    });
  };

  const groupByStatus = (cards) => {
    const statuses = ["Todo", "In progress", "Done", "Backlog", "Cancel"];
    const grouped = statuses.reduce((acc, status) => {
      acc[status] = [];
      return acc;
    }, {});

    cards.forEach((task) => {
      if (grouped[task.status]) {
        grouped[task.status].push(task);
      }
    });

    return grouped;
  };

  const groupByUser = (cards) => {
    return cards.reduce((acc, ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      const userName = user ? user.name : "Unknown User";
      if (!acc[userName]) acc[userName] = [];
      acc[userName].push(ticket);
      return acc;
    }, {});
  };

  const groupByPriority = (cards) => {
    return cards.reduce((acc, ticket) => {
      const priorities = ["No Priority", "Low", "Medium", "High", "Urgent"];
      const priorityLabel = priorities[ticket.priority];
      if (!acc[priorityLabel]) acc[priorityLabel] = [];
      acc[priorityLabel].push(ticket);
      return acc;
    }, {});
  };

  useEffect(() => {
    if (grouping === "status") setGroupedCards(groupByStatus(tasks));
    else if (grouping === "user") setGroupedCards(groupByUser(tasks));
    else if (grouping === "priority") setGroupedCards(groupByPriority(tasks));
    console.log(tasks);
  }, [grouping, ordering]);

  return (
    <DashboardContainer>
      {Object.keys(groupedCards).map((group) => (
        <Column
          key={group}
          group={group}
          cards={sortTasks(groupedCards[group])}
        />
      ))}
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  background-color: #f4f6fa;
  justify-content: space-between;
  padding: 20px 40px;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

export default Dashboard;
