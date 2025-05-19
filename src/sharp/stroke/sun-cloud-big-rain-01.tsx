import React from "react";
const SunCloudBigRain_01: React.FC<
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
        d="M9 4.655A3.84 3.84 0 0 0 5.844 3 3.85 3.85 0 0 0 2 6.857C2 8.154 2.638 9.3 3.616 10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 10.01h.022c2.485 0 4.5 2.017 4.5 4.506A4.505 4.505 0 0 1 17.955 19m-.477-8.99q.021-.249.022-.502A5.504 5.504 0 0 0 12 4a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 9.03A5.005 5.005 0 0 0 2 14.015C2 16.438 3.718 18.536 6 19m.52-9.97q.237-.022.48-.022c1.126 0 2.165.372 3 1.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 16s-2.5 1.5-2.5 3.503C9.5 20.734 10.447 22 12 22s2.5-1.266 2.5-2.497C14.5 17.5 12 16 12 16Z"
      />
    </svg>
  );
};
export default SunCloudBigRain_01;
