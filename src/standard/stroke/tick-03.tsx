import React from "react";
const Tick_03: React.FC<
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
        d="m2.707 13.293 1.586-1.586a1 1 0 0 1 1.414 0L8.5 14.5l9.295-10.224a1 1 0 0 1 1.447-.034l2.05 2.05a1 1 0 0 1 0 1.415L9.208 19.793a1 1 0 0 1-1.414 0l-5.086-5.086a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};
export default Tick_03;
