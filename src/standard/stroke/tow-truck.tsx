import React from "react";
const TowTruck: React.FC<
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
        d="M22 16h-1.5M17 21.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 21.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 19.5H3.803a1 1 0 0 1-.555-.168l-.803-.535A1 1 0 0 1 2 17.965V13h10m0 0V5.5h2.823a2 2 0 0 1 1.749 1.029l1.754 3.157a2 2 0 0 0 .447.547l2.18 1.869A3 3 0 0 1 22 14.38v4.12a1 1 0 0 1-1 1h-2M12 13h9.5M9 19.5h6M12 12.5l-5-10m0 0L8 13M7 2.5H3.5v4A1.5 1.5 0 1 1 2 8"
      />
    </svg>
  );
};
export default TowTruck;
