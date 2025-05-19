import React from "react";
const Tree_02: React.FC<
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
        d="M15 17h1a5 5 0 0 0 .999-9.9C16.999 4.338 15 2 12 2S7.001 4.338 7.001 7.1A5.002 5.002 0 0 0 8 17h1M10 22h2m0 0h2m-2 0v-7m0 0 2.5-2.5M12 15v-2m0 0V9m0 4-2.5-2.5"
      />
    </svg>
  );
};
export default Tree_02;
