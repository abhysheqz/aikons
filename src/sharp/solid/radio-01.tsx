import React from "react";
const Radio_01: React.FC<
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
        d="m7.215 5.687 10-3-.431-1.437-10 3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5A.75.75 0 0 1 2 4.25h20a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm15.057 6.014a3.75 3.75 0 0 0-6.364 3.674zm.75 1.299-6.364 3.674a3.75 3.75 0 0 0 6.364-3.674m-6.181-3.359a5.25 5.25 0 1 1 5.249 9.092 5.25 5.25 0 0 1-5.25-9.092M7.009 8H5v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radio_01;
