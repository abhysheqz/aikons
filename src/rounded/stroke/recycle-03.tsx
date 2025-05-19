import React from "react";
const Recycle_03: React.FC<
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
        d="M9 3.723A9.003 9.003 0 0 0 2.124 14M9 3.723 6 2.5m3 1.223L8 6.5m11.064 10a8.96 8.96 0 0 0 .936-4c0-4.46-3.243-8.161-7.5-8.876M19.064 16.5l2.936-2m-2.936 2-1.564-3m-13.984 4a8.99 8.99 0 0 0 7.484 4 8.97 8.97 0 0 0 6-2.292M3.516 17.5H7m-3.484 0V21"
      />
    </svg>
  );
};
export default Recycle_03;
