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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.803 4.63 6.033 2.36c3.48 1.362 5.22 2.043 5.163 3.123-.058 1.08-1.874 1.576-5.506 2.566-1.081.295-1.622.442-1.997.817s-.522.916-.817 1.997c-.99 3.632-1.486 5.448-2.566 5.506s-1.76-1.683-3.122-5.163L4.63 9.803C3.204 6.159 2.49 4.338 3.414 3.414c.924-.923 2.745-.21 6.389 1.216Z"
      />
    </svg>
  );
};
export default Cursor_02;
