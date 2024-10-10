import noPriorityIcon from "../assets/No-priority.svg";
import urgentIcon from "../assets/SVG - Urgent Priority colour.svg";
import highIcon from "../assets/Img - High Priority.svg";
import mediumIcon from "../assets/Img - Medium Priority.svg";
import lowIcon from "../assets/Img - Low Priority.svg";

import todoIcon from "../assets/To-do.svg";
import inProgressIcon from "../assets/in-progress.svg";
import doneIcon from "../assets/Done.svg";
import backlogIcon from "../assets/Backlog.svg";
import cancelIcon from "../assets/Cancelled.svg";

export const priorityIcons = {
  "No Priority": noPriorityIcon,
  Urgent: urgentIcon,
  High: highIcon,
  Medium: mediumIcon,
  Low: lowIcon,
};
export const priorityIconsByNumber = {
  0: noPriorityIcon,
  4: urgentIcon,
  3: highIcon,
  2: mediumIcon,
  1: lowIcon,
};

export const statusIcons = {
  Todo: todoIcon,
  "In progress": inProgressIcon,

  Backlog: backlogIcon,
  Done: doneIcon,
  Cancel: cancelIcon,
};
