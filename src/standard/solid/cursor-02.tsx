import React from "react";
const Cursor_02: React.FC<
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
        d="M2.334 3.944c-.387-1.007.603-1.997 1.61-1.61l17.007 6.541c1.091.42 1.056 1.975-.053 2.345l-7.258 2.42-2.42 7.258c-.37 1.109-1.925 1.144-2.345.053z"
      />
    </svg>
  );
};
export default Cursor_02;
