import React from "react";
const Lamp_01: React.FC<
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
        d="M9 13a3 3 0 1 0 6 0M12 20v2m3-3 2 1.5M9 19l-2 1.5M5 13h14M18 13a6 6 0 0 0-12 0M12 7V2"
      />
    </svg>
  );
};
export default Lamp_01;
