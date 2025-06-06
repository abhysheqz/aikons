import React from "react";
const TableTennisBat: React.FC<
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
        d="m7 8 9 9M7.47 12.132c.297.566.426 1.24.075 1.775-.97 1.477-2.98 2.94-4.627 3.719-.497.234-.776.795-.528 1.285.247.49.615 1.094 1.11 1.589s1.098.863 1.589 1.11 1.05-.031 1.285-.528c.779-1.648 2.242-3.656 3.719-4.627.534-.351 1.209-.222 1.775.075 1.825.956 4.81 1.657 7.109-.642 2.163-2.163 2.718-5.108 2.983-7.34.206-1.74-.386-3.644-1.625-4.883-1.24-1.239-3.143-1.83-4.882-1.625-2.233.265-5.178.82-7.341 2.983-2.299 2.299-1.598 5.284-.642 7.109"
      />
    </svg>
  );
};
export default TableTennisBat;
