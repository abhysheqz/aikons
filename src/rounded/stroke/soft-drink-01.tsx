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
        strokeWidth={1.5}
        d="M12 7V4.348c0-2.187.374-2.716 2.497-2.12L18 3.21M6 7l1.14 11.16c.171 1.677.257 2.515.828 3.021 1.178 1.044 6.78 1.139 8.064 0 .571-.506.657-1.344.828-3.02L18 7M5 7h14M7 12h10M7 16h10"
      />
    </svg>
  );
};
export default SoftDrink_01;
