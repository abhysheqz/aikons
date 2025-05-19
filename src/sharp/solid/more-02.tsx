import React from "react";
const More_02: React.FC<
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
        d="M17.25 19.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M9.75 19.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M2.25 19.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M17.25 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M17.25 4.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M9.75 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M9.75 4.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M2.25 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0M2.25 4.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
      />
    </svg>
  );
};
export default More_02;
