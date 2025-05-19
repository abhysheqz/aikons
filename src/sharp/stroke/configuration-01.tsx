import React from "react";
const Configuration_01: React.FC<
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
        d="M9.047 22h5.906v-2.581l1.892-1.113 2.202 1.292L22 14.402l-2.201-1.291v-2.222L22 9.6l-2.953-5.197-2.202 1.292-1.892-1.112V2H9.047v2.582L7.155 5.694 4.953 4.402 2 9.598l2.202 1.291v2.222L2 14.4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.966 21.963a.01.01 0 0 1-.014 0L2.054 19.07a.01.01 0 0 1 0-.015l5.32-5.374c-1.14-4.189 3.057-6.738 6.094-5.316-.713.718-1.995 1.901-2.45 2.505-.853 1.561.9 3.008 2.165 2.112.509-.36 1.813-1.8 2.45-2.42 1.268 2.919-.597 5.32-2.628 6.063-.97.354-1.965.197-2.688 0z"
      />
    </svg>
  );
};
export default Configuration_01;
