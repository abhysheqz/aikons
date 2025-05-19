import React from "react";
const ImageComposition: React.FC<
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
        d="M2 3c6.522 2.667 13.478 2.667 20 0v18c-6.522-2.667-13.478-2.667-20 0z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6.5 19.5 10-8.5 5.5 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
    </svg>
  );
};
export default ImageComposition;
