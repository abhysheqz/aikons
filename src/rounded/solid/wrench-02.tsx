import React from "react";
const Wrench_02: React.FC<
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
        fill="currentColor"
        d="M18.5 6.82c0 1.584-1.529 3.043-3.825 5.328a3.8 3.8 0 0 1-5.352 0C7.03 9.863 5.5 8.403 5.5 6.82s.384-1.902 3.91-5.41a.54.54 0 0 1 .922.378v3.613c0 .917.746 1.662 1.667 1.662.922 0 1.669-.744 1.67-1.66V1.788a.54.54 0 0 1 .923-.378C18.116 4.919 18.5 5.236 18.5 6.82"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.602 13.673c.148.087.148.38.148.965v4.526c0 2.02-1.72 3.585-3.75 3.585s-3.75-1.565-3.75-3.585v-4.527c0-.585 0-.878.148-.965s.432.072 1 .388a5.37 5.37 0 0 0 5.203.002c.568-.318.853-.476 1-.39m-4.487 4.45a1.246 1.246 0 1 0 1.762 1.762l.008-.008a1.246 1.246 0 1 0-1.762-1.762z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wrench_02;
