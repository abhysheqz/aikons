import React from "react";
const RightTriangle: React.FC<
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
        d="M2.5 2.5a1 1 0 0 1 1.707-.707l18 18A1 1 0 0 1 21.5 21.5h-6v-2h3.586L4.5 4.914V8.5h-2z"
      />
      <path
        fill="currentColor"
        d="M1.5 10.5h3v4h4a1 1 0 0 1 1 1v4h4v3h-2v-1h-8a1 1 0 0 1-1-1v-8h-1z"
      />
    </svg>
  );
};
export default RightTriangle;
