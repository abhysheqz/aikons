import React from "react";
const Chart_01: React.FC<
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
        d="M3.5 19.998h3v-12h-3zM10.5 20h3V4h-3zM17.5 19.998h3v-9h-3z"
      />
    </svg>
  );
};
export default Chart_01;
