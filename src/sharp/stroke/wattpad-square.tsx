import React from "react";
const WattpadSquare: React.FC<
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
        d="M8.52 8.709c.96.452.8 1.695.6 2.26 1.23-2.382 4.71-4.947 4.71-.67.302-.481 1.205-1.556 2.41-2.013 1.506-.572 2.635.571.838 2.285 0 0-.898.858-1.796 2.572-.899 1.714-3.294 3.428-4.062-.478-2.1 5.087-4.5 3.674-5.1.283-.601-3.391 1.2-4.805 2.4-4.24"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
    </svg>
  );
};
export default WattpadSquare;
