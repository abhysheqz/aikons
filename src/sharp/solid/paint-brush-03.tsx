import React from "react";
const PaintBrush_03: React.FC<
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
        d="M19.529 1.47a.75.75 0 0 0-1.061 0l-6.78 6.78h-4.69a.75.75 0 0 0-.53.22L3.938 11l.92.92L1.55 14.4a.75.75 0 0 0-.08 1.13l7 7a.75.75 0 0 0 1.13-.08l2.48-3.307.918.918 2.53-2.53a.75.75 0 0 0 .22-.531v-4.69l6.78-6.78a.75.75 0 0 0 0-1.06zm-8.52 16.601-5.08-5.08-2.787 2.09L4.5 16.44l.97-.97 1.06 1.061-.97.97.94.94.97-.97 1.06 1.06-.97.97 1.359 1.358z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaintBrush_03;
