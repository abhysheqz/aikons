import React from "react";
const AlignKeyObject: React.FC<
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
        d="M19.988 6v6M17.99 4H5.999m3.997 16H5.999M4 18V6M21.985 4a2 2 0 1 1-3.998.002A2 2 0 0 1 21.985 4ZM5.997 4A2 2 0 1 1 2 4.001 2 2 0 0 1 5.997 4ZM5.997 20A2 2 0 1 1 2 20.002 2 2 0 0 1 5.997 20Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.55 19.443a1.41 1.41 0 0 0-1.06-.45c-.828 0-1.5.67-1.5 1.495s.672 1.494 1.5 1.494c.83 0 1.501-.669 1.501-1.494 0-.397-.187-.777-.441-1.045Zm0 0 2.446-2.452m4.004 0-2.006-1.988a.01.01 0 0 0-.014 0l-1.984 1.988m0 0 1.49 1.444"
      />
    </svg>
  );
};
export default AlignKeyObject;
