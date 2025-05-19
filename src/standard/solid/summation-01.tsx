import React from "react";
const Summation_01: React.FC<
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
        d="M4.088 2.59A1 1 0 0 1 5 2h14a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V4H7.227l6.52 7.336a1 1 0 0 1 0 1.328L7.227 20H18v-2.5a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1H5a1 1 0 0 1-.747-1.664L11.662 12l-7.41-8.336a1 1 0 0 1-.164-1.074"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Summation_01;
