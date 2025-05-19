import React from "react";
const CursorInfo_01: React.FC<
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
        d="M14 3c-.553 0-1 .448-1 .998v1h-2v-1A3 3 0 0 1 14 1a2.999 2.999 0 0 1 2.045 5.191l-.126.117c-.276.256-.502.465-.68.69-.198.25-.239.4-.239.495v1h-2v-1c0-.732.338-1.316.67-1.736.284-.358.636-.682.902-.928l.11-.102A.999.999 0 0 0 14 3m1 6.5v2.01h-2V9.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.5 4.69 5.625 1.25l-1.375 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33-3.25-2.886v2.103h-5V6.498h-2z"
      />
    </svg>
  );
};
export default CursorInfo_01;
