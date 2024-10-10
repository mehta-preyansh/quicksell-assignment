import React, { useState } from "react";
import styled from "styled-components";
import downChevron from "../assets/down.svg";
import { useGroupingAndOrdering } from "../context";

const Dropdown = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { grouping, ordering, setGrouping, setOrdering } =
    useGroupingAndOrdering();
  const [currentValue, setCurrentValue] = useState(
    title === "grouping" ? grouping : ordering
  );
  const options =
    title === "grouping"
      ? ["status", "priority", "users"]
      : ["priority", "title"];
  return (
    <DropdownContainer>
      <div className="category-title">{title}</div>
      <div
        className="dropdown-button"
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <span>{currentValue}</span>
        <img
          className={`down-chevron${isHovered ? " reversed" : ""}`}
          src={downChevron}
          alt=""
        />
        {isHovered && (
          <div className="options-container">
            {options.map((option) => (
              <div
                className="option"
                key={option}
                onClick={() => {
                  setCurrentValue(option);
                  title === "grouping"
                    ? setGrouping(option)
                    : setOrdering(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </DropdownContainer>
  );
};
const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .category-title {
    color: #898b8c;
    text-transform: capitalize;
  }
  .dropdown-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-size: max(14px, 1vmin);
    user-select: none;
    text-transform: capitalize;
    cursor: pointer;
    .options-container {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      z-index: 1;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
      background-color: white;
      .option {
        width: 100%;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #f4f6fa;
        }
      }
    }
  }
`;
export default Dropdown;
