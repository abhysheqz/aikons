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
        strokeWidth={1.5}
        rx={10}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 20.5c.828 0 1.59-.245 2.19-.654a.73.73 0 0 0 .229-.93C14.073 18.258 13.33 17.5 12 17.5s-2.073.76-2.419 1.415a.73.73 0 0 0 .229.93c.6.41 1.362.655 2.19.655Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17.5v-8"
      />
    </svg>
  );
};
export default TableRound;
