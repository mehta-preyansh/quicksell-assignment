import Card from "./Card";
import userAvatar from "../assets/avatar.jpg";
import addIcon from "../assets/add.svg";
import sortIcon from "../assets/sort.svg";
import { useGroupingAndOrdering } from "../context";
import { statusIcons, priorityIcons } from "../utils/icons";
import styled from "styled-components";

const Column = ({ group, cards }) => {
  const { grouping } = useGroupingAndOrdering();

  return (
    <ColumnContainer>
      <div className="header-container">
        <div className="header-left">
          {grouping === "priority" && (
            <img
              src={priorityIcons[group]}
              alt={`${group} Icon`}
              className="priority-icon"
            />
          )}

          {grouping === "user" && (
            <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          )}

          {grouping === "status" && (
            <img
              src={statusIcons[group]}
              alt={`${group} Icon`}
              className="status-icon-column"
            />
          )}

          <p className="task-name">{group} </p>
          <div className="task-total">{cards.length}</div>
        </div>

        <div className="header-right">
          <img src={addIcon} alt="Add Icon" />
          <img src={sortIcon} alt="Sort Icon" />
        </div>
      </div>
      <div className="cards-container">
        {cards.map((cardDetails) => (
          <Card
            key={cardDetails.id}
            cardDetails={cardDetails}
            statusIcons={statusIcons}
          />
        ))}
      </div>
    </ColumnContainer>
  );
};

const ColumnContainer = styled.div`
  min-width: 300px;
  width: 15vw;
  gap: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 80vh;
  
  .header-container {
    display: flex;
    justify-content: space-between;
    .header-left,
    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .task-total {
        color: #757575;
    }
  }
  .cards-container {
    flex: 1;
    overflow-y: auto;
    padding-right: 6px;
  }
`;

export default Column;
