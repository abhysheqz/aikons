import React from "react";
const GolfBat: React.FC<
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
        d="M12 21.5H7.146c-1.522 0-2.95-.486-3.487-2.065-.505-1.483.193-3.946 2.08-3.935C9 15.5 12 21.5 12 21.5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.32 10.918.76.268 3.248-6.425c.424-.84.031-1.88-.825-2.182-.773-.272-1.607.179-1.85 1l-2.094 7.071zm0 0L12 21.5"
      />
    </svg>
  );
};
export default GolfBat;
