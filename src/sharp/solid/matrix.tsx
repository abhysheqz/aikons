import React from "react";
const Matrix: React.FC<
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
        d="M1.5 2h5v2h-3v16h3v2h-5zm21 0v20h-5v-2h3V4h-3V2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 8c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m4.995 0c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m4.996 0c0-.69.56-1.25 1.25-1.25H17a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25M5.75 12c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m4.995 0c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m4.996 0c0-.69.56-1.25 1.25-1.25H17a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25M5.75 16c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m4.995 0c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m4.996 0c0-.69.56-1.25 1.25-1.25H17a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Matrix;
