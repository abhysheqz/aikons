import React from "react";
const Treadmill_01: React.FC<
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
        d="M20.191 20H2.931c-.578 0-.895-.479-.928-.985-.032-.493.204-1.012.73-1.14l15.215-3.77C22.205 13.069 23.364 20 20.191 20Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 17h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 2-1.5 3L15 7M15 15l4-9.5M7 20l-2 2M18 20v2"
      />
    </svg>
  );
};
export default Treadmill_01;
