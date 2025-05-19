import React from "react";
const ArrowMoveUpLeft: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 21v-2.077c0-2 0-3.001-.145-3.838-.8-4.609-4.762-8.223-9.812-8.952C9.125 6 7.193 6 5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 3c-.607.59-3 2.16-3 3s2.393 2.41 3 3"
      />
    </svg>
  );
};
export default ArrowMoveUpLeft;
