import React from "react";
const Megaphone_03: React.FC<
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
        d="M18.177 3.763a1.75 1.75 0 0 1 1.237-.513H20c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 20 20.75h-.586a1.75 1.75 0 0 1-1.237-.513l-.994-.994a3.25 3.25 0 0 0-1.364-.814l-1.558-.468-1.057 1.585a2.704 2.704 0 0 1-4.954-1.5v-1.888l-.5-.15V7.992l8.069-2.42a3.25 3.25 0 0 0 1.364-.815zM9.75 16.608v1.438a1.204 1.204 0 0 0 2.206.668l.802-1.203zM6.25 8.25v7.5H5A2.75 2.75 0 0 1 2.25 13v-2A2.75 2.75 0 0 1 5 8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Megaphone_03;
