import React from "react";
const Ripple: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m0 4.5a3.75 3.75 0 0 0-3.723 4.204 3.751 3.751 0 1 0 3.723 6.341 3.75 3.75 0 1 0 3.723-6.341q.027-.223.027-.454a3.75 3.75 0 0 0-3.75-3.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ripple;
