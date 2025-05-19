import React from "react";
const SunCloudMidSnow_01: React.FC<
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
        d="M11 17.509V15.75h2v1.759l1.496-.873 1.008 1.728-1.52.886 1.52.886-1.008 1.728L13 20.99v1.759h-2v-1.759l-1.496.873-1.008-1.728 1.52-.886-1.52-.886 1.008-1.728z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5.858c0 1.317.551 2.504 1.433 3.344a5.75 5.75 0 0 0 3.867 9.531l2.74-4.483h5.49l2.684 4.5h.036a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-8.92-5.454A4.58 4.58 0 0 0 5.846 1.25 4.6 4.6 0 0 0 1.25 5.858m4.596-2.71a2.704 2.704 0 0 0-2.698 2.71c0 .865.401 1.634 1.03 2.131a5.7 5.7 0 0 1 1.675-.624A6.24 6.24 0 0 1 7.74 3.927a2.68 2.68 0 0 0-1.894-.78"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudMidSnow_01;
