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
        strokeWidth={1.5}
        d="M3.5 21.5v-13c0-2.828 0-4.243.879-5.121C5.257 2.5 6.672 2.5 9.5 2.5s4.243 0 5.121.879c.879.878.879 2.293.879 5.121v13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 10.5h12M2.5 21.5h14M15.5 14.5h1a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 0 3 0v-5.5m-1-4 .414.414a2 2 0 0 1 .586 1.414V11.5m-1-4-2-2m2 2v2.172a2 2 0 0 0 .586 1.414l.414.414"
      />
    </svg>
  );
};
export default PetrolPump;
