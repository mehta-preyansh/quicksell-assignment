import React, { useState } from "react";
import styled from "styled-components";
import downChevron from "../assets/down.svg";
import filterIcon from "../assets/Display.svg";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavbarContainer>
      <div
        className="display-button"
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <img src={filterIcon} alt="" />
        <span>Display</span>
        <img
          className={`down-chevron${isHovered ? " reversed" : ""}`}
          src={downChevron}
          alt=""
        />
        {isHovered && (
          <div
            className="dropdown-container"
            onClick={(e) => e.stopPropagation()}
          >
            <Dropdown title="grouping" />
            <Dropdown title="ordering" />
          </div>
        )}
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  height: max(5vh, 60px);
  padding: 16px 40px;
  background-color: white;
  .display-button {
    position: relative;
    display: flex;
    width: fit-content;
    gap: 5px;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-size: max(16px, 1.2vmin);
    user-select: none;
    cursor: pointer;
    .down-chevron.reversed {
      transform: rotate(180deg);
    }
    .dropdown-container {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      min-width: 200px;
      width: min(300px, 25vw);
      padding: 10px 20px;
      background-color: white;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0);

      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export default Navbar;
