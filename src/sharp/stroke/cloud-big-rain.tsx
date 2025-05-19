import React from "react";
const CloudBigRain: React.FC<
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
        d="M17.478 9.01h.022c2.485 0 4.5 2.017 4.5 4.506A4.505 4.505 0 0 1 17.955 18m-.477-8.99q.021-.249.022-.502A5.504 5.504 0 0 0 12 3a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 8.03A5.005 5.005 0 0 0 2 13.015C2 15.438 3.718 17.536 6 18m.52-9.97q.237-.022.48-.022c1.126 0 2.165.372 3 1.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 15c-.74.716-2.5 2.248-2.5 3.503C9.5 19.734 10.447 21 12 21s2.5-1.266 2.5-2.497c0-1.255-1.76-2.787-2.5-3.503Z"
      />
    </svg>
  );
};
export default CloudBigRain;
