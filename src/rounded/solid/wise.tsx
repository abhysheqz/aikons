import React from "react";
const Wise: React.FC<
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
        d="M7 1a1 1 0 0 0-.874 1.486l2.134 3.84-3.967 3.967A1 1 0 0 0 5 12h8.923l-3.851 9.629a1 1 0 1 0 1.857.742l8-20A1 1 0 0 0 19 1z"
      />
    </svg>
  );
};
export default Wise;
