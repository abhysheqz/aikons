import React from "react";
const Parallelogram: React.FC<
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
        d="m2.31 18.758 3.5-14A1 1 0 0 1 6.78 4h13.94a1 1 0 0 1 .97 1.243l-3.5 14a1 1 0 0 1-.97.757H3.28a1 1 0 0 1-.97-1.242Z"
      />
    </svg>
  );
};
export default Parallelogram;
