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
        fillRule="evenodd"
        d="M2 19.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M9.5 19.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M17 19.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M9.5 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M17 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M17 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default More_02;
