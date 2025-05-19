import React from "react";
const Fuel_02: React.FC<
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
        d="M13.667 4.5H6a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5a1 1 0 0 0-.4-.8l-5.333-4a1 1 0 0 0-.6-.2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 8 4 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18c1.105 0 2-.84 2-1.875C14 14.875 12 13 12 13s-2 1.875-2 3.125C10 17.16 10.895 18 12 18ZM6 4.5V3a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1.5"
      />
    </svg>
  );
};
export default Fuel_02;
