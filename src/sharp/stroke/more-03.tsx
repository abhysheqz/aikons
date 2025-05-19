import React from "react";
const More_03: React.FC<
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
        strokeWidth={1.5}
        d="M3 6h3V3H3zM18 6h3V3h-3zM10.5 6h3V3h-3zM3 21h3v-3H3zM3 13.5h3v-3H3zM18 21h3v-3h-3zM18 13.5h3v-3h-3zM10.5 21h3v-3h-3zM10.5 13.5h3v-3h-3z"
      />
    </svg>
  );
};
export default More_03;
