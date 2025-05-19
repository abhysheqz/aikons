import React from "react";
const Heading_05: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 5v14M14 5v14"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 15.5v.5a2 2 0 1 0 4 0v-.5a2.5 2.5 0 0 0-2.5-2.5H17v-3h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12h10"
      />
    </svg>
  );
};
export default Heading_05;
