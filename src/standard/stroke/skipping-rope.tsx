import React from "react";
const SkippingRope: React.FC<
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
        d="M8 5.5C8 7.433 9.79 9 12 9s4-1.567 4-3.5S14.21 2 12 2 8 3.567 8 5.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 12V9.5c0-.693.093-1.363.269-2m-.27 4.5H7l-.745 1.489a2 2 0 0 0-.202 1.08l.442 4.75C6.578 20.943 5.593 22 4.5 22s-2.078-1.057-1.995-2.681l.442-4.75a2 2 0 0 0-.202-1.08L2 12zM6 5a7.5 7.5 0 0 1 13.5 4.5V12m.001 0H22l-.744 1.489a2 2 0 0 0-.203 1.08l.442 4.75C21.578 20.943 20.593 22 19.5 22s-2.078-1.057-1.995-2.681l.442-4.75a2 2 0 0 0-.203-1.08L17 12z"
      />
    </svg>
  );
};
export default SkippingRope;
