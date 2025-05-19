import React from "react";
const Dish_01: React.FC<
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
        d="M2 17h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 17 .715 2.541A2 2 0 0 0 5.64 21h12.72a2 2 0 0 0 1.925-1.459L21 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 14.5C3.675 10.33 7.413 7 12 7s8.326 3.33 8.5 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7s1.5-1.034 1.5-2.309c0-2.255-3-2.255-3 0C10.5 5.966 12 7 12 7Z"
      />
    </svg>
  );
};
export default Dish_01;
