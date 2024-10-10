import React, { useEffect, useRef, useState } from 'react'
import downChevron from "../assets/down.svg";
import styled from 'styled-components';

const DropDownButton = ({children, value}) => {
    const [isHovered, setIsHovered] = useState(false);
    const displayButtonRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          displayButtonRef.current &&
          !displayButtonRef.current.contains(event.target)
        ) {
          setIsHovered(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <Container
      onClick={() => setIsHovered((prev) => !prev)}
      ref={displayButtonRef}
    >
      <span>{value}</span>
      <img
        className={`down-chevron${isHovered ? " reversed" : ""}`}
        src={downChevron}
        alt=""
      />
      {isHovered && children}
    </Container>
  );
}

const Container = styled.div`
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
`;

export default DropDownButton