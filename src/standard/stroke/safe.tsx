import React from "react";
const Safe: React.FC<
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
        d="M10.508 6v3.5m0-3.5A1.5 1.5 0 1 0 7.51 6v8l-2.725-3.41c-.652-.815-1.777-.815-2.428 0a1.63 1.63 0 0 0-.102 1.893L5.012 17c1.499 3 3.997 5 6.994 5M10.508 6V3.5a1.5 1.5 0 1 1 2.997 0v2m0 0v4m0-4a1.5 1.5 0 1 1 2.998 0V8m0 0v1.5m0-1.5A1.5 1.5 0 1 1 19.5 8v1.5M16 17l1 1 2-2m-6-2c1.5-.5 3-1 4.5-2 1.5 1 3 1.5 4.5 2 0 3 0 6.5-4.5 8-4.5-1.5-4.5-5-4.5-8"
      />
    </svg>
  );
};
export default Safe;
