import React from "react";
const SunCloudAngledRainZap_02: React.FC<
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
        strokeWidth={1.5}
        d="M9.579 15 7.5 18.5h3L8.423 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.5 20-1 2M13.5 20l-1 2M17.978 10.9H18c2.485 0 4.5 1.982 4.5 4.426 0 1.927-1.252 3.566-3 4.174m-1.522-8.6q.022-.242.022-.491C18 7.422 15.538 5 12.5 5 9.623 5 7.263 7.172 7.02 9.94m10.958.96a5.34 5.34 0 0 1-1.235 2.951M7.021 9.94c-2.537.237-4.52 2.338-4.52 4.895 0 1.608.785 3.037 2 3.934m2.52-8.83q.236-.021.48-.022c1.125 0 2.164.366 3 .984"
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
export default SunCloudAngledRainZap_02;
