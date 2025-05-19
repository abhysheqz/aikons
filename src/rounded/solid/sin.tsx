import React from "react";
const Sin: React.FC<
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
        d="M9 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v8h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V8h-1a1 1 0 0 1-1-1M16.77 6.027a1 1 0 0 1 1.124.526L21 12.764V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1.894.447L18 11.237V17a1 1 0 1 1-2 0V7a1 1 0 0 1 .77-.973M1 9.5C1 7.787 2.146 6 4 6h.5c1.442 0 2.565.99 3.104 2.211a1 1 0 1 1-1.829.809C5.463 8.314 4.944 8 4.5 8H4c-.356 0-1 .452-1 1.5S3.644 11 4 11h1c1.854 0 3 1.787 3 3.5S6.854 18 5 18h-.5c-1.57 0-2.754-1.167-3.236-2.545a1 1 0 0 1 1.888-.66C3.442 15.625 4.02 16 4.5 16H5c.356 0 1-.452 1-1.5S5.356 13 5 13H4c-1.854 0-3-1.787-3-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sin;
