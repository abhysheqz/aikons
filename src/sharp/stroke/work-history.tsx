import React from "react";
const WorkHistory: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19 19-1.5-1.05V15M13 17.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11.5v-6H2V21h9M16 5.5 15 2H8L7 5.5"
      />
    </svg>
  );
};
export default WorkHistory;
