import React from "react";
const SunCloudLittleRain_01: React.FC<
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
        d="M11.001 16.25v-2.5h2v2.5zM8 19.25v-2.5h2v2.5zm6 0v-2.5h2v2.5zm-8.5 3v-2.5h2v2.5zm5.5 0v-2.5h2v2.5zm5.5 0v-2.5h2v2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 6.358c0 1.316.551 2.504 1.433 3.344A5.73 5.73 0 0 0 1.25 13.5c0 1.973.994 3.714 2.509 4.75H6.5v-3h3.001v-3h5v3H17.5v3h3.083a5.251 5.251 0 0 0-2.336-9.447 6.25 6.25 0 0 0-8.92-5.454 4.58 4.58 0 0 0-3.481-1.6A4.6 4.6 0 0 0 1.25 6.36m4.596-2.71a2.704 2.704 0 0 0-2.698 2.71c0 .865.401 1.634 1.03 2.131a5.7 5.7 0 0 1 1.675-.625A6.24 6.24 0 0 1 7.74 4.427a2.68 2.68 0 0 0-1.894-.78"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudLittleRain_01;
