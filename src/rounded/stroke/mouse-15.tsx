import React from "react";
const Mouse_15: React.FC<
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
        d="M6 2c0 1.802 1.744 1.5 3.007 1.5 2.04 0 2.927.377 2.993 2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c5.2 0 6.5-3.608 6.5-8S17.2 6 12 6s-6.5 3.608-6.5 8 1.3 8 6.5 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v2"
      />
    </svg>
  );
};
export default Mouse_15;
