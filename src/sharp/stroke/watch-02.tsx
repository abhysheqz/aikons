import React from "react";
const Watch_02: React.FC<
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
        d="M18 6v12H6V6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 6-1-4H9L8 6M16 18l-1 4H9l-1-4M12 9v3.005l1.5 1.495"
      />
    </svg>
  );
};
export default Watch_02;
