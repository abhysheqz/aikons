import React from "react";
const ImageCounterClockwise: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 7a5 5 0 1 1 8 6m-8-6 1-4m-1 4 3.5 1M17.5 17.5 13 13l-4.5 4.5L6 15l-3.5 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M7.492 11.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 7H2v14h16V11"
      />
    </svg>
  );
};
export default ImageCounterClockwise;
