import React from "react";
const DragRight_04: React.FC<
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
        d="M14.5 13.5v-1A1.5 1.5 0 0 0 13 11h-1m-.5 2V7a1.5 1.5 0 0 0-3 0v9l-1.382-1.699a1.547 1.547 0 0 0-2.282.125 1.5 1.5 0 0 0-.03 1.854l3.186 4.394a2 2 0 0 0 1.62.826h7.24c1.463 0 2.648-1.142 2.648-2.55V14.5A1.5 1.5 0 0 0 18 13h-.5m-.5 1v-.5a1.5 1.5 0 0 0-1.5-1.5H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.196 9a3.5 3.5 0 1 1 3.608 0M17 3.5 19.5 6 17 8.5M13.5 6h5"
      />
    </svg>
  );
};
export default DragRight_04;
