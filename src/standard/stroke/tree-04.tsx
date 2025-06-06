import React from "react";
const Tree_04: React.FC<
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
        d="M12 22V9M9 17c-1.793-1.037-3-2.78-3-5 0-1.626.95-2.92 2-4 0 0-.5-1-.5-2 0-2.5 2-4 4.5-4s4.5 1.5 4.5 4c0 1-.5 2-.5 2 1.05 1.08 2 2.374 2 4 0 2.22-1.207 3.963-3 5M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_04;
