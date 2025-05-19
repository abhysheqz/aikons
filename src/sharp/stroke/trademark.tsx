import React from "react";
const Trademark: React.FC<
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
        d="M2 3h20v18H2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 8.5h2.5m2.5 0H7.5m5 7.5V8.5h.5l2.35 4h.386L18 8.5h.5V16m-11-7.5V16"
      />
    </svg>
  );
};
export default Trademark;
