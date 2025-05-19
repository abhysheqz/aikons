import React from "react";
const SmartWatch_01: React.FC<
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
        d="M5.25 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.877 1.25h6.246l1.627 6.095-1.846.514-1.243-4.654H10.34L9.096 7.859 7.25 7.345zM7.25 16.655l1.846-.514 1.243 4.655h3.322l1.243-4.655 1.846.514-1.627 6.095H8.877z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartWatch_01;
