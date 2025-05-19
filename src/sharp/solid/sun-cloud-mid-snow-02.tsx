import React from "react";
const SunCloudMidSnow_02: React.FC<
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
        d="M5.705 2.351c-.63.13-1.217.379-1.735.723l-.766-.77-1.42 1.408.775.78a5 5 0 0 0-.724 1.758H.75v2h1.085a5 5 0 0 0 1.58 2.747l1.329-1.494A3 3 0 0 1 3.735 7.25c0-1.664 1.337-3 2.97-3a2.95 2.95 0 0 1 2.276 1.072l1.538-1.279a4.97 4.97 0 0 0-2.814-1.692V1.25h-2zM11.5 17.509V15.75h2v1.759l1.496-.873 1.008 1.728-1.52.886 1.52.886-1.008 1.728-1.496-.873v1.759h-2v-1.759l-1.496.873-1.008-1.728 1.52-.886-1.52-.886 1.008-1.728z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.353 8.365a5.752 5.752 0 0 0 .858 11.378l-.266-.493 3.056-5h5l3.055 5-.27.5H18a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default SunCloudMidSnow_02;
