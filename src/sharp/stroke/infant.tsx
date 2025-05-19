import React from "react";
const Infant: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 15a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1ZM18 22c0-1.792-.786-3.4-2.031-4.5M6 22c0-1.792.786-3.4 2.031-4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9 10v.01M15 10v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3.5 11a1.5 1.5 0 0 1 0-3h.752a8.003 8.003 0 0 1 15.496 0h.752a1.5 1.5 0 0 1 0 3h-.562a8.001 8.001 0 0 1-15.876 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 2c1 0 2 .895 2 2s-1 2-2 2a2.63 2.63 0 0 1-1.5-.5"
      />
    </svg>
  );
};
export default Infant;
