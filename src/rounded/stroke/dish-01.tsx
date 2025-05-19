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
        strokeWidth={1.5}
        d="M2 17h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7s1.5-1.034 1.5-2.309c0-2.255-3-2.255-3 0C10.5 5.966 12 7 12 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m3 17 .621 2.485A2 2 0 0 0 5.561 21h12.877a2 2 0 0 0 1.94-1.515L21 17M20.5 14.5C20.002 10.277 16.386 7 12 7s-8.002 3.277-8.5 7.5"
      />
    </svg>
  );
};
export default Dish_01;
