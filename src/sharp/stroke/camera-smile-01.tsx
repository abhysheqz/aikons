import React from "react";
const CameraSmile_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h.009m5.982 0H15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15.5s1.125 1.5 3 1.5 3-1.5 3-1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.514 6.009c.258-.052 3.599-.022 4.978 0l.525 15.963-9.945.01H2.02l.474-15.93c.002-.053-.01-.034.065-.034 1.405-.022 4.684-.06 4.937-.009m9.513 1.985-1.496-6.012H8.5L6.998 8"
      />
    </svg>
  );
};
export default CameraSmile_01;
