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
        d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75m0-17a3.75 3.75 0 0 0-3.723 4.204A3.751 3.751 0 1 0 12 16.295a3.75 3.75 0 1 0 3.723-6.341q.027-.223.027-.454A3.75 3.75 0 0 0 12 5.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ripple;
