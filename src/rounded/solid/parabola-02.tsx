import React from "react";
const Parabola_02: React.FC<
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
        d="M3 1a1 1 0 0 1 1 1c0 3.992.973 7.558 2.494 10.092C8.026 14.646 10.004 16 12 16s3.974-1.354 5.506-3.908C19.028 9.558 20 5.992 20 2a1 1 0 1 1 2 0c0 4.292-1.042 8.227-2.779 11.121C17.498 15.996 14.975 18 12 18s-5.497-2.004-7.221-4.879C3.042 10.226 2 6.292 2 2a1 1 0 0 1 1-1M2 20a1 1 0 0 1 1-1h1.059a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4.235 0a1 1 0 0 1 1-1h1.06a1 1 0 1 1 0 2h-1.06a1 1 0 0 1-1-1m8.47 0a1 1 0 0 1 1-1h1.06a1 1 0 1 1 0 2h-1.06a1 1 0 0 1-1-1m4.236 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-1.059a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.93 3.763A.75.75 0 0 0 9.5 5H11v17a1 1 0 1 0 2 0V5h1.5a.75.75 0 0 0 .57-1.237l-1.28-1.5c-.268-.314-.517-.606-.749-.813C12.791 1.226 12.452 1 12 1s-.79.226-1.041.45c-.232.207-.48.499-.75.814z"
      />
    </svg>
  );
};
export default Parabola_02;
