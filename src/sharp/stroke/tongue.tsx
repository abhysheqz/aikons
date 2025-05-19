import React from "react";
const Tongue: React.FC<
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
        strokeWidth={1.5}
        d="M19.72 12c1.181-1.241 1.941-2.815 2.279-3.614C21.392 6.95 19.419 3 16.079 3c-1.049 0-1.926.6-2.594 1.305-.57.601-1.486 1.481-1.486 1.481s-.917-.88-1.486-1.48C9.845 3.6 8.968 3 7.918 3 4.578 3 2.607 6.95 2 8.385c.338.799 1.097 2.374 2.279 3.615m14.719-3.614h2.541M4.998 8.385h-2.49"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.998 9 .27-.274A2.43 2.43 0 0 1 14 8c1.14 0 2.13.797 2.386 1.922l.97 4.257C18.15 17.67 15.533 21 11.998 21s-6.152-3.331-5.357-6.82l.97-4.258A2.455 2.455 0 0 1 9.997 8c.649 0 1.272.261 1.73.726zm0 0v3"
      />
    </svg>
  );
};
export default Tongue;
