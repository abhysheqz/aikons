import React from "react";
const PathfinderOutline: React.FC<
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
        d="M8.25 8.25H13v1.5H9.75V13h-1.5zm13 1.5H17v-1.5h5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-5h1.5v4.25h11.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2A.75.75 0 0 1 2 1.25h13a.75.75 0 0 1 .75.75v5h-1.5V2.75H2.75v11.5H7v1.5H2a.75.75 0 0 1-.75-.75zm13 12.25V11h1.5v4.75H11v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderOutline;
