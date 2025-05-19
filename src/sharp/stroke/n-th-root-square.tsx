import React from "react";
const NThRootSquare: React.FC<
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
        d="M3 21h18V3H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.999 9.978h-5a.01.01 0 0 0-.008.006L9.5 16.99a.01.01 0 0 1-.017 0l-1.976-3.985a.01.01 0 0 0-.016-.003L6 14.494m4.002-4.004V8.643c0-.92-.688-1.651-1.517-1.651-.67.012-1.327.574-1.483 1.462m0 2.025V8.455m0 0V6.25"
      />
    </svg>
  );
};
export default NThRootSquare;
