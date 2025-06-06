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
        d="m6 4.928-2.325-.894a.496.496 0 0 0-.64.641l6.54 17.007c.167.434.787.42.934-.021l2.46-7.38a.5.5 0 0 1 .313-.313l7.379-2.46a.496.496 0 0 0 .021-.933L17.5 9.352"
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
