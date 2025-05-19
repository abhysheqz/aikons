import React from "react";
const CameraMicrophone_01: React.FC<
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
        d="M16.515 6.009c.258-.052 3.599-.022 4.977 0l.526 15.963-9.945.01H2.02l.474-15.93c.002-.053-.01-.034.065-.034 1.405-.022 4.684-.06 4.937-.009m9.513 1.985-1.496-6.012H8.502L6.999 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.51 14.509C9.11 16.209 10.426 17 12 17m0 0v2.017m0-2.017c1.574 0 2.935-.805 3.502-2.492m-3.495-.029a1.75 1.75 0 0 1-1.751-1.75v-1.971a1.751 1.751 0 1 1 3.502 0v1.97c0 .968-.784 1.752-1.751 1.752Z"
      />
    </svg>
  );
};
export default CameraMicrophone_01;
