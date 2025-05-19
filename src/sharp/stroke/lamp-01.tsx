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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6ZM9 14a3 3 0 1 0 6 0M4 14h16M12 8V2M12 20v2m3-3 2 1.5M9 19l-2 1.5"
      />
    </svg>
  );
};
export default Lamp_01;
