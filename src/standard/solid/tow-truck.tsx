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
      <circle cx={17} cy={19.625} r={2.5} fill="currentColor" />
      <circle cx={7} cy={19.625} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 2.625a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 .67.415l5 10a.75.75 0 1 1-1.34.67L8.127 6.558l.619 6.496a.75.75 0 1 1-1.494.142l-.935-9.821H4.25v2.628a2.25 2.25 0 1 1-3 2.122.75.75 0 0 1 1.5 0 .75.75 0 1 0 .75-.75.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.625a1 1 0 0 0-1 1v6.5H2a1 1 0 0 0-1 1v4.965a2 2 0 0 0 .89 1.664l.803.535a2 2 0 0 0 .734.3A3.705 3.705 0 0 1 7 15.925a3.7 3.7 0 0 1 3.563 4.7h2.874a3.703 3.703 0 0 1 3.563-4.7 3.7 3.7 0 0 1 3.563 4.7H21a2 2 0 0 0 2-2v-1.75h-.75a.75.75 0 0 1 0-1.5H23v-.87a4 4 0 0 0-1.397-3.037l-2.18-1.869a1 1 0 0 1-.223-.273l-1.754-3.158a3 3 0 0 0-2.623-1.543zm7.297 7.5H13v-5.5h1.823a1 1 0 0 1 .874.514l1.755 3.158a3 3 0 0 0 .67.82z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TowTruck;
