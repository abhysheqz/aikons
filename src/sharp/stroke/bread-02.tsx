import React from "react";
const Bread_02: React.FC<
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
        d="M7 7a5 5 0 0 0-5 5v5h10v-5a5 5 0 0 0-5-5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 17h10v-5a5 5 0 0 0-5-5H7M5.5 13.5c0-1.933.672-3.5 1.5-3.5s1.5 1.567 1.5 3.5V17"
      />
    </svg>
  );
};
export default Bread_02;
