import React from "react";
const HoldPhone: React.FC<
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
        d="m21 20-2-4c0-1.698.367-4.266-.422-5.845-.334-.666-.578-1.341-.578-2.1V4.43A.43.43 0 0 0 17.571 4 2.57 2.57 0 0 0 15 6.571M8 18l4 2.5 1 1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.027 15 5 18h10V2H5l.027 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.25 7.5h1.5a1.25 1.25 0 1 0 0-2.5h-1.5a1.25 1.25 0 1 0 0 2.5Zm0 0h2.5a1.25 1.25 0 1 1 0 2.5h-2.5m0-2.5a1.25 1.25 0 1 0 0 2.5m0 0h1.5a1.25 1.25 0 1 1 0 2.5h-1.5m0-2.5a1.25 1.25 0 1 0 0 2.5m0 0h1a1.25 1.25 0 1 1 0 2.5h-1a1.25 1.25 0 1 1 0-2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 15h.009"
      />
    </svg>
  );
};
export default HoldPhone;
