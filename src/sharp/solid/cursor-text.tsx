import React from "react";
const CursorText: React.FC<
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
        d="M7.763 6h2.292l4.763 10.59-1.823.82L11.461 14H6.357l-1.534 3.41L3 16.59zm-.507 6h3.306L8.909 8.326zM16.888 4.25a1.9 1.9 0 0 0-.886-.25l-.018-2c.774-.007 1.746.295 2.509.933.764-.635 1.733-.933 2.498-.933v2c-.487 0-1.155.288-1.5.772V11h1v2h-1v6.229c.147.206.355.384.605.522.325.177.658.251.886.249L21 22c-.774.007-1.746-.295-2.509-.933-.763.636-1.733.933-2.498.933v-2c.487 0 1.155-.288 1.5-.772V13h-1v-2h1V4.772a1.8 1.8 0 0 0-.605-.523"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorText;
