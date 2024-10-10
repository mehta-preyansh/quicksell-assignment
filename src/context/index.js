import React, { createContext, useState, useContext, useEffect } from "react";

const GroupingAndOrderingContext = createContext();

export const useGroupingAndOrdering = () => {
  return useContext(GroupingAndOrderingContext);
};

export const GroupingAndOrderingProvider = ({ children }) => {
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("grouping") || "status";
  });
  const [ordering, setOrdering] = useState(() => {
    return localStorage.getItem("ordering") || "title";
  });

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("ordering", ordering);
  }, [grouping, ordering]);

  return (
    <GroupingAndOrderingContext.Provider
      value={{ grouping, setGrouping, ordering, setOrdering }}
    >
      {children}
    </GroupingAndOrderingContext.Provider>
  );
};
