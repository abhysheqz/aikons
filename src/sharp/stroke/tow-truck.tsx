import React from "react";
const TowTruck: React.FC<
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
        d="M22 16h-2M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 19H2.01a.01.01 0 0 1-.01-.01v-5.98a.01.01 0 0 1 .01-.01H8m11 6h2.99a.01.01 0 0 0 .01-.01V13l-5.997-6.997L15.995 6H12m-4 7h13.462M8 13l-.942-9.424M12 12 7 3H3.51a.01.01 0 0 0-.01.01V7c-.061.044 1.002-.098 1.429 1.007.365 1.221-.639 2.05-1.55 1.976-.704-.058-1.378-.588-1.378-1.47M15 19H9"
      />
    </svg>
  );
};
export default TowTruck;
