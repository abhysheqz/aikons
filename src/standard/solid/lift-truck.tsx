import React from "react";
const LiftTruck: React.FC<
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
        d="M20 3a1 1 0 0 1 1 1v13h1a1 1 0 1 1 0 2h-1a2 2 0 0 1-2-2v-3h-1a1 1 0 1 1 0-2h1V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M17 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5a2 2 0 0 1 2-2h4.65a2 2 0 0 1 1.249.438l4.35 3.48A2 2 0 0 1 16 8.482v5.527a3.8 3.8 0 0 0-5.167 4.493H8.167A3.804 3.804 0 0 0 3 14.006zm11 7h-2a1 1 0 0 1-.8-.4L9.4 9.2A3 3 0 0 0 7 8H5V5h4.65L14 8.48z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiftTruck;
