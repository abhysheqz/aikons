import React from "react";
const Sofa_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M5 6a1 1 0 0 1 1-1h5v8H7v-2a3 3 0 0 0-2-2.83zm8 7h4v-2c0-1.306.835-2.417 2-2.83V6a1 1 0 0 0-1-1h-5zM12 3H6a3 3 0 0 0-3 3v2.17a3 3 0 0 0-1 5.066V15a3 3 0 0 0 3 3v2a1 1 0 1 0 2 0v-2h10v2a1 1 0 1 0 2 0v-2a3 3 0 0 0 3-3v-1.764a3.001 3.001 0 0 0-1-5.065V6a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sofa_02;
