import React from "react";
const WorkAlert: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 10.5v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 5.5-.793-2.775A1 1 0 0 0 13.746 2H9.254a1 1 0 0 0-.961.725L7.5 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.5 19.525h.008m0-2.025L17.5 16m4.5 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      />
    </svg>
  );
};
export default WorkAlert;
