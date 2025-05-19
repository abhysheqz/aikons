import React from "react";
const Pan_02: React.FC<
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
        strokeWidth={1.5}
        d="M20.556 13H9.444C9.2 13 9 13.249 9 13.556 9 16.01 10.592 18 12.556 18h4.888C19.408 18 21 16.01 21 13.556c0-.307-.199-.556-.444-.556Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 13-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.368 6.368c.49-.49 1.286-.49 1.777 0l2.487 2.487a1.256 1.256 0 1 1-1.777 1.777L2.368 8.145a1.256 1.256 0 0 1 0-1.777Z"
      />
    </svg>
  );
};
export default Pan_02;
