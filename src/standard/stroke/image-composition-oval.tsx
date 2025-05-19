import React from "react";
const ImageCompositionOval: React.FC<
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
        d="M21.053 4.435c-5.785-3.247-12.321-3.247-18.106 0-.598.336-.947.98-.947 1.666V17.9c0 .685.349 1.33.947 1.666 5.785 3.247 12.322 3.247 18.106 0 .598-.336.947-.98.947-1.666V6.1c0-.685-.349-1.33-.947-1.666Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 22c-.52-2.647-1.983-4.995-3.959-6.529C8.605 13.58 5.64 13 2 13M14 18c1.601-1.327 3.327-2.007 5.07-2a7 7 0 0 1 2.93.662"
      />
      <circle
        cx={7.5}
        cy={8.5}
        r={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default ImageCompositionOval;
