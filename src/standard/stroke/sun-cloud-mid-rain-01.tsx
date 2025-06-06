import React from "react";
const SunCloudMidRain_01: React.FC<
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
        d="M9 3.655A3.84 3.84 0 0 0 5.844 2 3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 9.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.962-1.252 3.365-3 3.984m-1.522-8.49q.021-.249.022-.502A5.504 5.504 0 0 0 12 3a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 8.03A5.005 5.005 0 0 0 2 13.015C2 15.07 3.234 16.71 5 17.5m1.52-9.47q.237-.022.48-.022c1.126 0 2.165.372 3 1.001M7.407 19.536 8.5 18.5l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M14.407 19.536 15.5 18.5l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016M10.907 14.036 12 13l1.093 1.036c.547.56.547 1.456-.029 2.016-.288.28-.66.448-1.064.448-.403 0-.776-.168-1.064-.448a1.417 1.417 0 0 1-.029-2.016"
      />
    </svg>
  );
};
export default SunCloudMidRain_01;
