import React from "react";
const TableRound: React.FC<
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
      <ellipse
        cx={12}
        cy={6.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={10}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 20.5H9l.772-2.316a1 1 0 0 1 .949-.684h2.558a1 1 0 0 1 .949.684zM12 17.5v-8"
      />
    </svg>
  );
};
export default TableRound;
