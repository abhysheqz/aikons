import React from "react";
const Award_01: React.FC<
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
        d="M12 12v6M16 22H8a4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 5h3c0 3-1.245 4.963-2.249 6M5 5H2c0 3 1.245 4.963 2.249 6M12 12c3.866 0 7-3.117 7-6.962V2H5v3.038C5 8.883 8.134 12 12 12Z"
      />
    </svg>
  );
};
export default Award_01;
