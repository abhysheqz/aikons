import React from "react";
const PulseRectangle_01: React.FC<
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
        d="M5.5 12h2L9 9.5l1.5 4.5 2-6 2 8 2-4h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m21.5 4.5-.002 15a2 2 0 0 1-2 2H4.51a2 2 0 0 1-2-1.999l-.009-15a2 2 0 0 1 2-2.001H19.5a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
};
export default PulseRectangle_01;
