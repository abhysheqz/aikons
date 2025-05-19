import React from "react";
const PetrolPump: React.FC<
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
        d="M3.5 21.5v-17a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17M3.5 10.5h12M2.5 21.5h14M15.5 14.5h1a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 0 3 0v-5.5m-1-4 1 1v3m-1-4-2-2m2 2v3l1 1"
      />
    </svg>
  );
};
export default PetrolPump;
