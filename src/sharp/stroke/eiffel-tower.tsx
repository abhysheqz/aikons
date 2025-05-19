import React from "react";
const EiffelTower: React.FC<
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
        strokeWidth={1.5}
        d="M3 22c4.678-5.614 7.122-13.108 8-18h2c.878 4.892 3.322 12.386 8 18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4V2M7 11h10M5 15h14"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M23 22h-8l-1-3-2-1-2 1-1 3H1"
      />
    </svg>
  );
};
export default EiffelTower;
