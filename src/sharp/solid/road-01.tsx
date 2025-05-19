import React from "react";
const Road_01: React.FC<
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
        d="M3.25 22a.75.75 0 0 0 .75.75h16a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75H4a.75.75 0 0 0-.75.75zM11 16v3h2v-3zm0-2.5v-3h2v3zM11 5v3h2V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Road_01;
