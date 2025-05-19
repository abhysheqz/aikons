import React from "react";
const Bitcoin: React.FC<
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
        d="M14.9 5H5.5V3h9.4c2.637 0 4.6 2.34 4.6 5 0 1.592-.704 3.07-1.834 4 1.13.93 1.834 2.408 1.834 4 0 2.66-1.963 5-4.6 5H5.5v-2h9.4c1.34 0 2.6-1.241 2.6-3s-1.26-3-2.6-3H7.7v-2h7.2c1.34 0 2.6-1.241 2.6-3s-1.26-3-2.6-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 20V4h2v16zM8.5 4V2h2v2zm5 0V2h2v2zM8.5 22v-2h2v2zm5 0v-2h2v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bitcoin;
