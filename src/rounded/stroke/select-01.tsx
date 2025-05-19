import React from "react";
const Select_01: React.FC<
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
        d="M5 2v6M2 5h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 5h3m-3 17h3m3-17h.5A3.5 3.5 0 0 1 22 8.5V9m0 9v.5a3.5 3.5 0 0 1-3.5 3.5H18m-9 0h-.5A3.5 3.5 0 0 1 5 18.5V18m17-6v3M5 12v3"
      />
    </svg>
  );
};
export default Select_01;
