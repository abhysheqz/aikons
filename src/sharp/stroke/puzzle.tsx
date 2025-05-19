import React from "react";
const Puzzle: React.FC<
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
        d="M12.999 5c0 .351-.06.688-.171 1.001h5.17v5.17a3 3 0 1 1 0 5.658v5.17h-5.17a3 3 0 1 0-5.66 0H2.001v-5.17a3 3 0 1 0 0-5.66V6.002h5.17A3 3 0 1 1 13 5Z"
      />
    </svg>
  );
};
export default Puzzle;
