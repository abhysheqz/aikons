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
        fill="currentColor"
        d="m8.218 14.229 1.72 1.021-1.182 1.99h3L8.78 22.25l-1.72-1.021 1.181-1.99h-3zM14.106 21.292l1.5-3 1.788.895-1.5 3zM12.606 18.292l-1.5 3 1.788.895 1.5-3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.683 9.702A4.6 4.6 0 0 1 1.25 6.359 4.6 4.6 0 0 1 5.846 1.75c1.393 0 2.64.622 3.48 1.6a6.25 6.25 0 0 1 8.92 5.454 5.251 5.251 0 0 1 .929 10.174l.23-.462-4.472-2.236-.6 1.2-.753-.377.81-1.364h-3l.602-1.013-4.299-2.553-3.7 6.23A5.75 5.75 0 0 1 1.25 13.5c0-1.456.541-2.785 1.433-3.798m.465-3.343c0-1.5 1.21-2.711 2.698-2.711.737 0 1.405.296 1.894.78a6.24 6.24 0 0 0-1.887 3.437c-.597.12-1.16.334-1.675.624a2.71 2.71 0 0 1-1.03-2.13"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_01;
