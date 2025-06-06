import React from "react";
const Forward_02: React.FC<
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
        d="M21.837 12.918c-.282.77-1.136 1.387-2.842 2.62-2.327 1.68-3.49 2.52-4.464 2.459a2.7 2.7 0 0 1-1.909-.965C12 16.286 12 14.858 12 12s0-4.286.622-5.032a2.7 2.7 0 0 1 1.91-.965c.972-.061 2.136.779 4.463 2.46 1.706 1.232 2.56 1.849 2.842 2.62a2.67 2.67 0 0 1 0 1.835Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.837 12.918c-.282.77-1.136 1.387-2.842 2.62-2.327 1.68-3.49 2.52-4.464 2.459a2.7 2.7 0 0 1-1.909-.965C2 16.286 2 14.858 2 12s0-4.286.622-5.032a2.7 2.7 0 0 1 1.91-.965c.972-.061 2.136.779 4.463 2.46 1.706 1.232 2.56 1.849 2.842 2.62a2.67 2.67 0 0 1 0 1.835Z"
      />
    </svg>
  );
};
export default Forward_02;
