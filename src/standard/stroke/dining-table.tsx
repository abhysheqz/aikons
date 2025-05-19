import React from "react";
const DiningTable: React.FC<
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
        d="m20 4-1.11 1.664A3 3 0 0 1 16.395 7H7.606a3 3 0 0 1-2.497-1.336L4 4M2 4h20M5 20h.586c.577 0 .865 0 1.134-.077q.222-.063.424-.175c.244-.136.448-.34.856-.748v0c.408-.408.612-.612.856-.748q.202-.111.424-.175C9.55 18 9.837 18 10.414 18h3.172c.577 0 .865 0 1.134.077q.222.063.424.175c.244.136.448.34.856.748v0c.408.408.612.612.856.748q.202.111.424.175c.269.077.557.077 1.134.077H19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 7 .34 1.696a1 1 0 0 0 .98.804h1.36a1 1 0 0 0 .98-.804L14 7M10 18l.34-1.696a1 1 0 0 1 .98-.804h1.36a1 1 0 0 1 .98.804L14 18M12 15.5v-6"
      />
    </svg>
  );
};
export default DiningTable;
