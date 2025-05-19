import React from "react";
const SunCloudAngledRainZap_01: React.FC<
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
        d="M9 3.655A3.84 3.84 0 0 0 5.844 2 3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 8.697h.022c2.485 0 4.5 1.913 4.5 4.273 0 1.86-1.252 3.443-3 4.03m-1.522-8.303q.021-.234.022-.475C17.5 5.338 15.038 3 12 3 9.123 3 6.762 5.097 6.52 7.77m10.958.927a5.06 5.06 0 0 1-1.235 2.849M6.52 7.769C3.984 8 2 10.027 2 12.495c0 1.554.786 2.933 2 3.799m2.52-8.525A5 5 0 0 1 7 7.748c1.126 0 2.165.353 3 .95"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.079 13.5 7 17h3l-2.078 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.5 17.5-1.5 3M13.5 17.5l-1.5 3"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_01;
