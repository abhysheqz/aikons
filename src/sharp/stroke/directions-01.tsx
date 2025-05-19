import React from "react";
const Directions_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.004 21V3M9.006 21h5.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.984 9.003h-5.97a.01.01 0 0 0-.01.01V15q0 .01.01.01h5.97L20.009 12zM6.03 9.003h5.964a.01.01 0 0 0 .01-.01V3.006a.01.01 0 0 0-.01-.01H6.03L4.006 6.007z"
      />
    </svg>
  );
};
export default Directions_01;
