import React from "react";
const Eggs: React.FC<
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
        d="M3.225 8.69C4.452 6.763 6.277 5.25 8.5 5.25s4.048 1.513 5.275 3.44c1.238 1.944 1.975 4.459 1.975 6.81 0 2.383-.79 4.223-2.148 5.461-1.347 1.228-3.168 1.789-5.102 1.789s-3.756-.561-5.102-1.789C2.041 19.723 1.25 17.883 1.25 15.5c0-2.351.737-4.866 1.975-6.81"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.015 1.62c-2.053-.85-4.32-.15-6.19 1.16-.617.432-1.208.94-1.755 1.506 1.701.736 3.04 2.136 3.97 3.598 1.392 2.185 2.21 4.98 2.21 7.615 0 1.009-.125 1.955-.37 2.826q.425-.09.836-.237c1.728-.625 3.163-2.022 4.075-4.223.9-2.173 1.181-4.778.781-7.047-.396-2.25-1.503-4.347-3.557-5.198"
      />
    </svg>
  );
};
export default Eggs;
