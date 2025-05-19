import React from "react";
const PoolTable: React.FC<
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
        d="M3 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1.798l-1.63 2.445a1 1 0 0 0 1.664 1.11L7.202 18H21a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm5.535 14h.787a2.751 2.751 0 0 1 5.356 0h3.707A3.76 3.76 0 0 1 21 13.385v-6.77A3.76 3.76 0 0 1 18.385 4h-3.741a2.751 2.751 0 0 1-5.288 0h-3.74A3.76 3.76 0 0 1 3 6.615v6.77A3.76 3.76 0 0 1 5.615 16h.517l3.036-4.555a1 1 0 0 1 1.664 1.11zM3 4h1.016A2.26 2.26 0 0 1 3 5.016zm9 .49c-.405 0-.764-.192-.993-.49h1.986c-.229.298-.588.49-.993.49m0 10.888c.462 0 .865.25 1.081.622H10.92A1.25 1.25 0 0 1 12 15.378m7.984.622H21v-1.016A2.26 2.26 0 0 0 19.984 16M21 5.016V4h-1.016c.218.44.576.798 1.016 1.016M3 14.984c.44.218.798.576 1.016 1.016H3zM12 8a1 1 0 1 0 0 2h.012a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoolTable;
