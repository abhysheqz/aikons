import React from "react";
const CircleArrowDown_02: React.FC<
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
        d="M1.249 12c0-5.937 4.813-10.75 10.75-10.75S22.749 6.063 22.749 12s-4.813 10.75-10.75 10.75S1.249 17.937 1.249 12m14.28 1-3.53 3.53L8.467 13l1.06-1.06 1.72 1.719v-6.19h1.5v6.19l1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDown_02;
