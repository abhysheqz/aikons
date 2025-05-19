import React from "react";
const Terrace: React.FC<
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
        d="m3 14 1 5m0 0-1 3m1-3h3l1 3M21 14l-1 5m0 0 1 3m-1-3h-3l-1 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10v12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 22h2M9 15h6M3 8v2h18V8c-3.5-2-6-3.5-9-6-3 2.5-5.5 4-9 6"
      />
    </svg>
  );
};
export default Terrace;
