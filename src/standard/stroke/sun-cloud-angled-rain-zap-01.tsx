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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4.405A3.84 3.84 0 0 0 5.844 2.75 3.85 3.85 0 0 0 2 6.607c0 1.297.638 2.444 1.616 3.143"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 9.447h.022c2.485 0 4.5 1.913 4.5 4.273 0 1.86-1.252 3.443-3 4.03m-1.522-8.303q.021-.234.022-.475c0-2.884-2.462-5.222-5.5-5.222-2.877 0-5.238 2.097-5.48 4.77m10.958.927a5.06 5.06 0 0 1-1.235 2.849M6.52 8.519C3.984 8.75 2 10.777 2 13.245c0 1.554.786 2.933 2 3.799m2.52-8.525A5 5 0 0 1 7 8.498c1.126 0 2.165.353 3 .95M9.079 14.25 7 17.75h3l-2.078 3.5M16.5 18.25l-1.5 3m-1.5-3-1.5 3"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_01;
