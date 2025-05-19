import React from "react";
const Select_01: React.FC<
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
        d="M22 19v1a2 2 0 0 1-2 2h-1M8 22H7a2 2 0 0 1-2-2v-1M19 5h1a2 2 0 0 1 2 2v1m-9.5 14h2M5 12.5v2M12.5 5h2m7.5 7.5v2M5 2v6M2 5h6"
      />
    </svg>
  );
};
export default Select_01;
