import React from "react";
const Clipboard: React.FC<
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
        strokeWidth={1.5}
        d="M7.07 13.841 9.908 3.428a1.92 1.92 0 0 1 2.369-1.356l8.32 2.359a1.947 1.947 0 0 1 1.338 2.373l-2.833 10.752a1.917 1.917 0 0 1-2.44 1.35L8.335 16.21a1.95 1.95 0 0 1-1.266-2.369Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.447 7h-1.43C2.7 7 1.736 8.225 2.065 9.481l2.891 11.03c.273 1.042 1.34 1.68 2.406 1.438L12 20.895"
      />
    </svg>
  );
};
export default Clipboard;
