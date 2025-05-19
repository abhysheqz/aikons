import React from "react";
const StrokeCenter: React.FC<
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
        d="M8 22h10c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-1c0-1.886 0-2.828-.586-3.414S19.886 13 18 13h-3c-1.886 0-2.828 0-3.414-.586S11 10.886 11 9V6c0-1.886 0-2.828-.586-3.414S8.886 2 7 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v10c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 10V2M14 17.5h8"
      />
    </svg>
  );
};
export default StrokeCenter;
