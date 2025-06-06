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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.325 6.288-1.829 2.073c1.39 0 2.085 0 2.613.201a2.94 2.94 0 0 1 1.828 2.061c.127.538.024 1.205-.183 2.54L14.015 17h5.231a1.75 1.75 0 1 1 0 3.5H5.996a3 3 0 0 1-3-3v-6.573A3 3 0 0 1 4.103 8.6l5.805-4.722a1.78 1.78 0 0 1 2.183-.008c.768.597.874 1.693.234 2.418"
      />
    </svg>
  );
};
export default Shaka_01;
