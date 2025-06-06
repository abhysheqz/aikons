import React from "react";
const InternetAntenna_04: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16.959 5C17.619 5.87 18 6.898 18 8s-.381 2.13-1.041 3M7.04 5C6.381 5.87 6 6.898 6 8s.381 2.13 1.041 3M20.316 3C21.38 4.43 22 6.15 22 8s-.62 3.57-1.684 5M3.684 3C2.62 4.43 2 6.15 2 8s.62 3.57 1.684 5M11 10 7 21M17 21l-4-11M8.5 17h7"
      />
    </svg>
  );
};
export default InternetAntenna_04;
