import React from "react";
const Maze: React.FC<
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
        d="M5.5 1.75H13v5.996a3 3 0 0 0 3 3h1.5a1 1 0 1 0 0-2H16a1 1 0 0 1-1-1V1.75h3.5a3.75 3.75 0 0 1 3.75 3.75V14H11a1 1 0 1 0 0 2h3v6.25H5.5a3.75 3.75 0 0 1-3.75-3.75V16h2.94a1 1 0 1 0 0-2H1.75v-3h3.94a3 3 0 0 0 3-3V7a1 1 0 0 0-2 0v1a1 1 0 0 1-1 1H1.75V5.5A3.75 3.75 0 0 1 5.5 1.75M16 22.25h2.5a3.75 3.75 0 0 0 3.75-3.75V16H16v6.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maze;
