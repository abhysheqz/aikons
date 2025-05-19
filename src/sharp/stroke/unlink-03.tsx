import React from "react";
const Unlink_03: React.FC<
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
        d="m8 16 7.999-8M15.125 11.625 16.5 13 22 7.5 16.5 2 11 7.5l1.375 1.375M11.625 15.125 13 16.5 7.5 22 2 16.5 7.5 11l1.375 1.375M21 16h-3m-2 5v-3M3 8h3m2-5v3"
      />
    </svg>
  );
};
export default Unlink_03;
