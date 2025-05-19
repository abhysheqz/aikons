import React from "react";
const Shaka_01: React.FC<
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
        d="m12.332 6.288-1.829 2.073c1.39 0 2.085 0 2.613.201a2.94 2.94 0 0 1 1.828 2.061c.127.538.023 1.205-.183 2.54l-.758 3.938h5.25c.967 0 1.75.76 1.75 1.7 0 .938-.783 1.699-1.75 1.699H7.003a4 4 0 0 1-4-4v-5.486a4 4 0 0 1 1.619-3.213l5.293-3.923a1.78 1.78 0 0 1 2.183-.008c.768.597.874 1.693.234 2.418Z"
      />
    </svg>
  );
};
export default Shaka_01;
