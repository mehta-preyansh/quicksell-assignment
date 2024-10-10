import React, { useState } from "react";
import styled from "styled-components";
import downChevron from "../assets/down.svg";
import { useGroupingAndOrdering } from "../context";
import DropDownButton from "./DropdownButton";

const Dropdown = ({ title }) => {
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
      <DropDownButton value={currentValue}>
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
      </DropDownButton>
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
`;
export default Dropdown;
