import React from "react";
const Parallelogram: React.FC<
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
        d="M4.091 8.545c.605-2.183.907-3.274 1.81-3.91C6.801 4 8.048 4 10.541 4h4.024c3.92 0 5.88 0 6.88 1.154.997 1.154.522 2.87-.429 6.301l-1.108 4c-.605 2.183-.907 3.274-1.81 3.91-.901.635-2.148.635-4.641.635H9.434c-3.92 0-5.88 0-6.88-1.154-.998-1.154-.522-2.87.429-6.301z"
      />
    </svg>
  );
};
export default Parallelogram;
