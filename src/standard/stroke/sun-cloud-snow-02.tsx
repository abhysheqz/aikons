import React from "react";
const SunCloudSnow_02: React.FC<
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
        strokeWidth={2}
        d="m11.998 17.997.004.008M15.995 16l.005.008M8 16l.004.008m7.992 3.987.004.008m-8-.008.004.008m3.994 1.99.004.007"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 11.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.77-1.018 3.29-2.5 3.984m-2.022-8.49A5.504 5.504 0 0 0 12 5a5.504 5.504 0 0 0-5.48 5.03m10.958.98c-.083.912-.478 1.49-.978 1.99m-9.98-2.97A5.005 5.005 0 0 0 2 15.015C2 16.87 3.006 18.141 4.5 19m2.02-8.97q.237-.022.48-.022c.91 0 1.765.243 2.5.67"
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
export default SunCloudSnow_02;
