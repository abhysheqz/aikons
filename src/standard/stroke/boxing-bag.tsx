import React from "react";
const BoxingBag: React.FC<
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
        d="M18 17.5q-6 2-12 0m12-7q-6-2-12 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 6.5 12 2 8 6.5M18 2H6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c1.79 0 3.473-.356 4.945-.984.667-.284 1.055-.966 1.055-1.691V8.675c0-.725-.388-1.407-1.055-1.691A12.6 12.6 0 0 0 12 6c-1.79 0-3.473.356-4.945.984C6.388 7.268 6 7.95 6 8.675v10.65c0 .725.388 1.407 1.055 1.691C8.527 21.644 10.211 22 12 22Z"
      />
    </svg>
  );
};
export default BoxingBag;
