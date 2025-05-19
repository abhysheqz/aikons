import React from "react";
const Grid_02: React.FC<
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
        fill="currentColor"
        d="M7 6h10V3h2v3h3v2h-3v8h3v2h-3v3h-2v-3H7v3H5v-3H2v-2h3V8H2V6h3V3h2zm0 10h10V8H7z"
      />
    </svg>
  );
};
export default Grid_02;
