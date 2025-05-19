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
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 9.5 5.5 2M15 9.5 18.5 2M15 2l-1 2.5M12.5 9l-3-7M11 18h1m0 0h1m-1 0v-5l-1 .5"
      />
    </svg>
  );
};
export default MedalFirstPlace;
