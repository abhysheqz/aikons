import React from "react";
const Fuel_01: React.FC<
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
        d="M12 4.5H4V22h16V8.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 18c1.105 0 2-.84 2-1.875C14 14.875 12 13 12 13s-2 1.875-2 3.125C10 17.16 10.895 18 12 18Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.5 8 4 2M6 4.5V2h3.5v2.5"
      />
    </svg>
  );
};
export default Fuel_01;
