import React from "react";
const SunCloudAngledRain_01: React.FC<
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
        fillRule="evenodd"
        d="m6.105 17.856 1-2 1.79.894-1 2zm4.5 0 1-2 1.79.894-1 2zm4.5 0 1-2 1.79.894-1 2zm-8 4 1-2 1.79.894-1 2zm4.5 0 1-2 1.79.894-1 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5.858c0 1.317.551 2.505 1.433 3.344a5.75 5.75 0 0 0 1.631 8.884l2.121-4.243 3.6 1.8.9-1.8 3.6 1.8.9-1.8 4.472 2.236-1.274 2.549a5.252 5.252 0 0 0-.386-10.325 6.25 6.25 0 0 0-8.92-5.454A4.58 4.58 0 0 0 5.846 1.25 4.6 4.6 0 0 0 1.25 5.858m4.596-2.71a2.704 2.704 0 0 0-2.698 2.71c0 .865.401 1.634 1.03 2.131a5.7 5.7 0 0 1 1.675-.624A6.24 6.24 0 0 1 7.74 3.927a2.68 2.68 0 0 0-1.894-.78"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudAngledRain_01;
