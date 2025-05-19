import React from "react";
const PyramidStructure_01: React.FC<
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
        strokeWidth={1.5}
        d="M2 20h20l-2.222-4H4.222zM18.111 13l-1.667-3H7.556l-1.667 3zM12 2 9.222 7h5.556z"
      />
    </svg>
  );
};
export default PyramidStructure_01;
