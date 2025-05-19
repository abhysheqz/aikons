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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7V2h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7 1.5 15h9L18 7M4 7h16M7 12h10M7 16h10"
      />
    </svg>
  );
};
export default SoftDrink_01;
