import React from "react";
const SoftDrink_01: React.FC<
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
        d="M12 7V4a2 2 0 0 1 2-2h3.5M6 7l1.32 13.199A2 2 0 0 0 9.31 22h5.38a2 2 0 0 0 1.99-1.801L18 7M5 7h14M7 12h10M7 16h10"
      />
    </svg>
  );
};
export default SoftDrink_01;
