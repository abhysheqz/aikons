import React from "react";
const AiPhone_01: React.FC<
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
        d="M16 3h-1.5V1.25H13V3h-1.5v1.5H9.75V6h1.75v1.5H9.75V9h1.75v1.5H13v1.75h1.5V10.5H16v1.75h1.5V10.5H19V9h1.75V7.5H19V6h1.75V4.5H19V3h-1.5V1.25H16z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 1.25H10V3H8.25v7.5H10V12h1.5v1.75h6.25v9H3.25zM11.509 18H9.5v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiPhone_01;
