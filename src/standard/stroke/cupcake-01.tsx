import React from "react";
const Cupcake_01: React.FC<
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
        d="m18 12-1.244 8.297A2 2 0 0 1 14.778 22H9.16a2 2 0 0 1-1.966-1.631L6 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10c-3.959.495-6-.5-5.514-2.456m0 0C5.074 7.788 4 9.518 4 11c0 1.657 1 3 3 3s9-1 9-1c2.5-.5 4-2 4-3.5C20 7.29 18.21 6 16 6a4 4 0 0 0-4-4s0 2-2 3c-1 .5-3.028.588-3.514 2.544"
      />
    </svg>
  );
};
export default Cupcake_01;
