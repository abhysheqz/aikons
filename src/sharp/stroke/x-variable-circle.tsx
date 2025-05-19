import React from "react";
const XVariableCircle: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.506 15h-1.163c-1.36-.272-1.455-1.31-1.898-2.054a81 81 0 0 0-.443-.954m0 0a53 53 0 0 0-.952-1.941C10.634 9.316 10.476 9 8.452 9m3.55 2.992c.28-.35.557-.699.838-1.03C13.812 9.879 14.78 9 16 9m-3.998 2.992C10.799 13.497 9.573 15 8 15"
      />
    </svg>
  );
};
export default XVariableCircle;
