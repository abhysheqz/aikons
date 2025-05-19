import React from "react";
const Savings: React.FC<
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
        d="M6 13.5H2V22h4zM6 14.5h5.75a1.25 1.25 0 1 1 0 2.5H9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 17h5l3.684-2.698a1.44 1.44 0 0 1 1.896.117 1.43 1.43 0 0 1-.088 2.105L16 21H6M19 7A5 5 0 1 1 9 7a5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default Savings;
