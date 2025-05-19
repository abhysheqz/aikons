import React from "react";
const SunCloudAngledRain_02: React.FC<
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
        d="m13.004 16-1 2m5.5-2-1 2m-2.5 2-1 2m-4.5-6-1 2m2 2-1 2M17.978 10.976H18c2.485 0 4.5 2.006 4.5 4.481 0 1.563-.79 2.733-2 3.543m-2.522-8.024q.021-.246.022-.498C18 7.452 15.538 5 12.5 5c-2.877 0-5.238 2.2-5.48 5.002m10.958.974a5.4 5.4 0 0 1-.578 1.991M7.02 10.003c-2.536.24-4.52 2.368-4.52 4.957 0 1.63.786 3.11 2 4.041m2.52-8.998q.237-.022.48-.022c1.126 0 2.165.37 3 .996"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.456 4V2m0 2c-2.193 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 5.433M1.5 8h1.985m0 0c0 1.195.52 2.267 1.344 3M3.245 3.758l1.403 1.414"
      />
    </svg>
  );
};
export default SunCloudAngledRain_02;
