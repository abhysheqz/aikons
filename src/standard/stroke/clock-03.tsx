import React from "react";
const Clock_03: React.FC<
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
        d="M19 8.498h2.5C19.7 3.75 14.497.998 9.46 2.343 4.096 3.775.91 9.259 2.343 14.592c1.434 5.332 6.945 8.494 12.31 7.061A10.04 10.04 0 0 0 22 13.483"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.998v4l2 2"
      />
    </svg>
  );
};
export default Clock_03;
