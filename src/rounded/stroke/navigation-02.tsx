import React from "react";
const Navigation_02: React.FC<
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
        d="M2 11.95c-.03 1.035 4.032 3.47 4.414 2.987.74-1.04.806-4.83.046-5.872C6.104 8.58 2.03 10.939 2 11.95ZM11.95 22c1.035.03 3.47-4.032 2.987-4.414-1.04-.74-4.83-.806-5.872-.046-.485.356 1.874 4.43 2.885 4.46ZM22 11.95c.03 1.035-4.032 3.47-4.414 2.987-.74-1.04-.805-4.83-.046-5.872.356-.485 4.43 1.874 4.46 2.885ZM11.95 2c1.035-.03 3.47 4.031 2.987 4.414-1.04.74-4.83.805-5.872.045C8.58 6.104 10.939 2.03 11.95 2Z"
      />
      <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default Navigation_02;
