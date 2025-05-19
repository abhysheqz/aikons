import React from "react";
const Parabola_01: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1c0 3.992.973 7.558 2.494 10.092C8.026 15.646 10.004 17 12 17s3.974-1.354 5.506-3.908C19.028 10.558 20 6.992 20 3a1 1 0 1 1 2 0c0 4.292-1.042 8.227-2.779 11.121C17.498 16.996 14.975 19 12 19s-5.497-2.004-7.221-4.879C3.042 11.226 2 7.292 2 3a1 1 0 0 1 1-1M2.5 21a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Parabola_01;
