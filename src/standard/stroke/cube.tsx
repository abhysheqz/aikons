import React from "react";
const Cube: React.FC<
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
        d="m16.5 7.5 4.497-4.497M16.5 7.5H3.064m13.436 0v13.458M14 15.5H8.5m0 0v-5m0 5-5.58 5.58M2.5 7.5v14h14l4.707-4.707a1 1 0 0 0 .293-.707V2.5h-14z"
      />
    </svg>
  );
};
export default Cube;
