import React from "react";
const Blood: React.FC<
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
        strokeWidth={1.5}
        d="M15 5s7 4.25 7 9.775C22 18.765 18.866 22 15 22s-7-3.235-7-7.225C8 9.25 15 5 15 5ZM11.127 5.093C9.533 3.201 7.5 2 7.5 2S2 5.25 2 9.475a5.525 5.525 0 0 0 3.75 5.24"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 15.5c0 2.21-1.5 3-3 3"
      />
    </svg>
  );
};
export default Blood;
