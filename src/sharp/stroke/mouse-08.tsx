import React from "react";
const Mouse_08: React.FC<
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
        d="M7.192 18.071c.152 1.913 1.667 3.538 3.62 3.778.718.089 1.448.151 2.188.151s1.47-.062 2.188-.15c1.953-.241 3.467-1.866 3.62-3.779.105-1.326.192-2.685.192-4.071s-.087-2.745-.193-4.071c-.151-1.913-1.666-3.538-3.62-3.778A18 18 0 0 0 13 6c-.74 0-1.47.062-2.188.15-1.953.241-3.468 1.866-3.62 3.779C7.087 11.255 7 12.614 7 14s.087 2.745.192 4.071Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 9V3.5H5V2M14.5 9h-3v4h3z"
      />
    </svg>
  );
};
export default Mouse_08;
