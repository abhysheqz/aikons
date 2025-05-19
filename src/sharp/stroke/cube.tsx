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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.5 7.5 4.512-4.512M16.5 7.5H3.13m13.37 0v13.528M14 15.5H8.5m0 0v-5m0 5-5.528 5.528M2.5 7.5v14h14l5-5v-14h-14z"
      />
    </svg>
  );
};
export default Cube;
