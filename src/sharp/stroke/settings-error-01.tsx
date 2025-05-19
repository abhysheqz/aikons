import React from "react";
const SettingsError_01: React.FC<
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
        d="M20.348 10.567 22 9.598l-2.953-5.196-2.202 1.292-1.892-1.112V2H9.047v2.582L7.155 5.694 4.953 4.402 2 9.598l2.202 1.291v2.222L2 14.4l2.953 5.197 2.202-1.292 1.892 1.113V22h2.703m3.16-11.944a3.5 3.5 0 1 0-4.855 4.855"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 14.007V17m0 1.256v1.489M12 17a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"
      />
    </svg>
  );
};
export default SettingsError_01;
