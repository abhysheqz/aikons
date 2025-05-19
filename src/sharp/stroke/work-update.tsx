import React from "react";
const WorkUpdate: React.FC<
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
        d="M21 11.5v-6H2V21h9M16 5.5 15 2H8L7 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20 17.463-2.5 2-2.5-2M17.5 15v3.951"
      />
    </svg>
  );
};
export default WorkUpdate;
