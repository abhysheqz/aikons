import React from "react";
const MedalFirstPlace: React.FC<
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
      <circle
        cx={12}
        cy={15.5}
        r={6.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 18h1m0 0h1m-1 0v-5h-1M9 9.5 5.5 2M15 9.5 18.5 2M15 2l-1 2.5M9.5 2l3 6.5"
      />
    </svg>
  );
};
export default MedalFirstPlace;
