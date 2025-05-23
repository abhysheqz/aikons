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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4.155A3.84 3.84 0 0 0 5.844 2.5 3.85 3.85 0 0 0 2 6.357C2 7.654 2.638 8.8 3.616 9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 9.51h.022c2.485 0 4.5 2.017 4.5 4.506a4.505 4.505 0 0 1-4.045 4.484m-.477-8.99q.021-.249.022-.502A5.504 5.504 0 0 0 12 3.5a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M6.52 8.53A5.005 5.005 0 0 0 2 13.515c0 2.423 1.718 4.521 4 4.985m.52-9.97q.237-.022.48-.022c1.126 0 2.165.372 3 1.001M12 15.5S9.5 17 9.5 19.003c0 1.231.947 2.497 2.5 2.497s2.5-1.266 2.5-2.497C14.5 17 12 15.5 12 15.5"
      />
    </svg>
  );
};
export default SunCloudBigRain_01;
