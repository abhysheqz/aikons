import React from "react";
const SolarPanel_02: React.FC<
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
        d="M22.094 5.051a1 1 0 0 1 .632 1.265L19.182 16.95A3 3 0 0 1 16.336 19h-4.559v1.5h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V19h-6a1 1 0 1 1 0-2h12.559a1 1 0 0 0 .948-.684L20.83 5.684a1 1 0 0 1 1.264-.633"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.525 1.5h-3.434L9.735 6h3.434zm-1.808 6H9.282L8.53 10h3.434zm.813 2.5.753-2.5h4.506L18.02 10zm-2.02 1.5H8.077L6.72 16h3.434zm.21 4.5 1.358-4.5h4.48l-1.004 3.265A1.75 1.75 0 0 1 14.882 16zm-6.567 0 1.357-4.5H1.989L1.3 13.735A1.75 1.75 0 0 0 2.974 16zm1.809-6 .754-2.5H3.22L2.45 10zm1.206-4 1.356-4.5H6.358a1.75 1.75 0 0 0-1.672 1.235L3.68 6zm6.568 0 1.356-4.5h2.174a1.75 1.75 0 0 1 1.673 2.265L19.25 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarPanel_02;
