import React from "react";
const Obtuse: React.FC<
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
        d="m19 19.5 3-2.505-3-2.493M2 8 3.209 4.5l3.79 1m-3.543-.51L9.5 16.996h11.878"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.001 17A6 6 0 0 0 6.6 11.5"
      />
    </svg>
  );
};
export default Obtuse;
