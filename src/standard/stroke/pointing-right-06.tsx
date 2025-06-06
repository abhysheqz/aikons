import React from "react";
const PointingRight_06: React.FC<
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
        d="M2 20.001h1.5l1.405 1.124A4 4 0 0 0 7.403 22H11.5a2 2 0 0 0 2-2v-1m-11.5-9h1.5l4.656-3.387a3.21 3.21 0 0 1 4.303.482L15 10.002m.5 3h5a1.5 1.5 0 0 0 0-3H15m.5 3h-2m2 0v1a2 2 0 0 1-2 2h-1m-1 3h1a2 2 0 0 0 2-2v-1m-4-6H15M19.5 2 22 4.5 19.5 7m1.676-2.5H16"
      />
    </svg>
  );
};
export default PointingRight_06;
