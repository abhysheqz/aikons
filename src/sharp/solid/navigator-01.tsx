import React from "react";
const Navigator_01: React.FC<
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
        fillRule="evenodd"
        d="M5 3v18H3V3zm14 18V3h2v18z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m12 13-4.5 8 4.5-1.778 4.5 1.777z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 6V3h2v3zM11 11V8h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigator_01;
