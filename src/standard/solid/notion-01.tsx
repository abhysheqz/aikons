import React from "react";
const Notion_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm6.648 4.79 3.602 4.646V7.75h-.716a.75.75 0 1 1 0-1.5H17a.75.75 0 1 1 0 1.5h-.75V17a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.609-.312l-3.657-5.082v3.894h.774a.75.75 0 0 1 0 1.5H7.027a.75.75 0 0 1 0-1.5h.707v-8.5H7a.75.75 0 1 1 0-1.5h3.556a.75.75 0 0 1 .592.29"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notion_01;
