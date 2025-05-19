import React from "react";
const EaseOutControlPoint: React.FC<
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
        d="M4 2a3 3 0 1 0 2.83 4H8a1 1 0 0 0 0-2H6.83A3 3 0 0 0 4 2m7 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4.92 21.393l-.004.008a1 1 0 1 1-1.832-.802L4 21l-.916-.401.002-.005.005-.01.017-.04.065-.142a40.986 40.986 0 0 1 1.217-2.385 43 43 0 0 1 3.697-5.633C11.251 8.334 16.011 4 22 4a1 1 0 1 1 0 2c-5.01 0-9.251 3.666-12.337 7.616a41 41 0 0 0-3.522 5.367 39 39 0 0 0-1.151 2.255l-.057.125z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EaseOutControlPoint;
