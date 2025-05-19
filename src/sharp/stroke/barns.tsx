import React from "react";
const Barns: React.FC<
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
        d="M7.012 21.999v-9.007m9.965 0v9.007M7.012 12.992l9.965 9.007m-9.965 0 9.965-9.007M3.026 12.992h17.937M11.995 9.99c1.1 0 1.992-.897 1.992-2.002a1.997 1.997 0 0 0-1.992-2.002c-1.101 0-1.993.896-1.993 2.002s.892 2.001 1.992 2.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.999 21.976V6.977a.01.01 0 0 1 .005-.009l8.982-4.964a.01.01 0 0 1 .01 0l9 5.007a.01.01 0 0 1 .005.009v14.956z"
      />
    </svg>
  );
};
export default Barns;
