import React from "react";
const Forward_01: React.FC<
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
        d="M19.935 12.626c-.254 1.211-1.608 2.082-4.315 3.822-2.945 1.893-4.417 2.84-5.61 2.475a2.8 2.8 0 0 1-1.088-.635C8 17.418 8 15.612 8 12s0-5.418.922-6.288a2.8 2.8 0 0 1 1.088-.635c1.193-.365 2.665.582 5.61 2.475 2.707 1.74 4.06 2.61 4.315 3.822.087.412.087.84 0 1.252Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 5v14"
      />
    </svg>
  );
};
export default Forward_01;
