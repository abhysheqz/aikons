import React from "react";
const BodyArmor: React.FC<
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
        d="M14.5 2 12 3.481 9.5 2l-2 1c.277 2.222 2.38 4.87 4.5 5.5 2.12-.63 4.223-3.278 4.5-5.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.522 4c2.086.407 4.201 1.92 5.478 3l-1.5 4-7-3.5M7.478 4C5.392 4.407 3.277 5.92 2 7l1.5 4 7-3.5M18 10l-1 9H7l-1-9M19 22l-2-3H7l-2 3z"
      />
    </svg>
  );
};
export default BodyArmor;
