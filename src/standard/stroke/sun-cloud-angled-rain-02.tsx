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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.008 16-1 2m5.5-2-1 2m-2.5 2-1 2m-4.5-6-1 2m2 2-1 2M17.478 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 1.724-1.077 3.236-2.5 4M17.478 11q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.47 5.47 0 0 1-.868 2.5M6.52 10.023A5 5 0 0 0 2 15c0 1.91.926 3.632 2.5 4.5m2.02-9.477Q6.757 10 7 10c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 3.5V2m0 1.5c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 4.933M2 7.5h1.485m0 0c0 1.195.52 2.267 1.344 3m-1.344-7 1.163 1.172"
      />
    </svg>
  );
};
export default SunCloudAngledRain_02;
