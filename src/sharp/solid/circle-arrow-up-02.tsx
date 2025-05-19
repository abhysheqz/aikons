import React from "react";
const CircleArrowUp_02: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12m14.28-1L12 7.47 8.468 11l1.06 1.06 1.72-1.72v6.19h1.5v-6.189l1.72 1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUp_02;
