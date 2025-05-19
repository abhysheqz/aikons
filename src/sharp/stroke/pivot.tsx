import React from "react";
const Pivot: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 21H2.5V2h19v9.5M8.5 2v19M21.5 8h-19M16.5 17 14 19.5l2.5 2.5m-2-2.5h7v-4"
      />
    </svg>
  );
};
export default Pivot;
