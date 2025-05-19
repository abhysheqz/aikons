import React from "react";
const Triangle_01: React.FC<
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
        d="m21.175 18.514-8.3-14.94a1 1 0 0 0-1.75 0l-8.3 14.94A1 1 0 0 0 3.7 20h16.6a1 1 0 0 0 .875-1.486Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 20v2M19 9.5 17 11M5 9.5 7 11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 20c0-2.761-1.79-5-4-5M19 15c-2.21 0-4 2.239-4 5M15 7c-1.657 1.333-4.343 1.333-6 0"
      />
    </svg>
  );
};
export default Triangle_01;
