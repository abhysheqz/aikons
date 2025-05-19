import React from "react";
const Tree_03: React.FC<
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
        d="M12 22V9M15 17c1.793-1.037 3-2.78 3-5V8A6 6 0 0 0 6 8v4c0 2.22 1.207 3.963 3 5M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_03;
