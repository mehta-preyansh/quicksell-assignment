import { useGroupingAndOrdering } from "../context";
import { statusIcons, priorityIconsByNumber } from "../utils/icons";
import userAvatar from "../assets/avatar.jpg";
import styled from "styled-components";

const Card = ({ cardDetails }) => {
  const { grouping } = useGroupingAndOrdering();
  const statusIcon = statusIcons[cardDetails.status] || null;
  const priorityIcon = priorityIconsByNumber[cardDetails.priority] || null;

  return (
    <CardContainer>
      <div className="kanban-card-header">
        <div className="idRow">
          <p className="ticketid">{cardDetails.id}</p>
          {!(grouping === "users") && (
            <div className="avatar-container">
              <img className="avatar" src={userAvatar} alt="" />
              <div className="online"></div>
            </div>
          )}
        </div>

        <div className="title-row">
          {statusIcon && !(grouping === "status") && (
            <div className="status-icon">
              <img src={statusIcon} alt={cardDetails.status} />
            </div>
          )}
          <div className="title">{cardDetails.title}</div>
        </div>
      </div>
      <div className="kanban-card-footer">
        <div className="tag-container">
          {!(grouping === "priority") && (
            <img src={priorityIcon} alt="manual" className="manual-icon" />
          )}
          <div className="tag-wrapper">
            <span></span>
            <p className="tag">{cardDetails.tag}</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
  .kanban-card-header {
    display: flex;
    flex-direction: column;
    .idRow {
      display: flex;
      justify-content: space-between;
      .ticketid {
        font-size: 0.9rem;
        margin-bottom: 4px;
        padding: 0;
        color: #757575;
      }
      .avatar-container {
        position: relative;
        display: inline-block;
        margin-top: 0.5rem;
        .avatar {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          object-fit: cover;
        }

        .online {
          background-color: #ccbb3d;
          border-radius: 50%;
          height: 7px;
          width: 7px;
          position: absolute;
          bottom: 4px;
          right: 0.5px;
          border: 2px solid #f1f1f1;
        }
      }
    }
    .title-row {
      display: flex;
      align-items: flex-start;
      margin: 7px 0px;
      gap: 0.6rem;
      .status-icon {
        width: 14px;
        height: 14px;
        margin-top: 0.8rem;
        margin-right: 8px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        font-size: 0.8em;
        font-weight: 500;
        margin: 0;
        padding-top: 14px;
        line-height: 1.2;
        display: inline-block;
      }
    }
  }
  .kanban-card-footer {
    display: flex;
    align-items: center;
    padding-top: 0;
    .tag-container {
      display: flex;
      align-items: center;
      padding-top: 1px;
      .manual-icon {
        width: 14px;
        height: 14px;
        margin-right: 4px;
      }
      .tag-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 8px;
        border-radius: 4px;
        border: 1px solid #f1f1f1;
        span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #c4c4c4;
        }
        .tag {
          font-size: 0.72em;
          color: #555;
          padding: 0 8px;
          margin: 0;
        }
      }
    }
  }
`;

export default Card;
