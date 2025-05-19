import React from "react";
const CursorMagicSelection_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.99 4.564c-1.843-.64-2.93-.796-3.576-.15-.923.924-.21 2.745 1.216 6.389l2.36 6.033c1.362 3.48 2.043 5.22 3.123 5.163 1.08-.058 1.576-1.874 2.566-5.506.295-1.081.442-1.622.817-1.997s.916-.522 1.997-.817c3.632-.99 5.448-1.486 5.506-2.566.044-.826-.964-1.419-2.999-2.261"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 4A5.92 5.92 0 0 0 15 7.5a5.92 5.92 0 0 0-3.5 3.5A5.92 5.92 0 0 0 8 7.5 5.92 5.92 0 0 0 11.5 4M15.75 2c.214.58.67 1.036 1.25 1.25-.58.214-1.036.67-1.25 1.25a2.12 2.12 0 0 0-1.25-1.25A2.12 2.12 0 0 0 15.75 2"
      />
    </svg>
  );
};
export default CursorMagicSelection_02;
