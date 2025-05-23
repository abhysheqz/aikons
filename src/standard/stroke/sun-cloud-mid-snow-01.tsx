import React from "react";
const SunCloudMidSnow_01: React.FC<
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
        d="M9 4.655A3.84 3.84 0 0 0 5.844 3 3.85 3.85 0 0 0 2 6.857C2 8.154 2.638 9.3 3.616 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 10.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.962-1.252 3.365-3 3.984m-1.522-8.49q.021-.249.022-.502A5.504 5.504 0 0 0 12 4a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 9.03A5.005 5.005 0 0 0 2 14.015C2 16.07 3.234 17.71 5 18.5m1.52-9.47q.237-.022.48-.022c1.126 0 2.165.372 3 1.001M12 15v6m2.5-4.5-5 3m0-3 5 3"
      />
    </svg>
  );
};
export default SunCloudMidSnow_01;
