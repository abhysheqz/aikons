import React from "react";
const LeftTriangle: React.FC<
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
        d="M21.5 2.5a1 1 0 0 0-1.707-.707l-18 18A1 1 0 0 0 2.5 21.5h6v-2H4.914L19.5 4.914V8.5h2z"
      />
      <path
        fill="currentColor"
        d="M22.5 10.5h-3v4h-4a1 1 0 0 0-1 1v4h-4v3h2v-1h8a1 1 0 0 0 1-1v-8h1z"
      />
    </svg>
  );
};
export default LeftTriangle;
