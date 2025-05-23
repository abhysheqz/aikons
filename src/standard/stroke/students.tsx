import React from "react";
const Students: React.FC<
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
        d="M6 15h4a4 4 0 0 1 4 4 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 4 4 0 0 1 4-4M16 16h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-5M2.5 6 8 4l5.5 2L11 7.5V9s-.667-.5-3-.5S5 9 5 9V7.5zm0 0v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 8.5v.889c0 1.718-1.343 3.111-3 3.111s-3-1.393-3-3.111V8.5M15.318 11.03s.485-.353 2.182-.353 2.182.352 2.182.352m-4.364 0V10L13.5 9l4-1.5 4 1.5-1.818 1v1.03m-4.364 0v.288a2.182 2.182 0 1 0 4.364 0v-.289"
      />
    </svg>
  );
};
export default Students;
