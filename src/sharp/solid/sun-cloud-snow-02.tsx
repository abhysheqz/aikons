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
        fill="currentColor"
        d="M17.5 15.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.5 15.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9.5 19.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.5 17.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 19.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.5 21.751a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        d="M6.353 8.365a5.752 5.752 0 0 0-.345 11.19A2.5 2.5 0 0 1 7 17.75a2.5 2.5 0 1 1 4-2 2.5 2.5 0 0 1 1.5-.5 2.5 2.5 0 0 1 1.5.5 2.5 2.5 0 1 1 4 2c.584.438.97 1.126.999 1.905a5.252 5.252 0 0 0-.252-10.352 6.25 6.25 0 0 0-12.394-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.705 2.351c-.63.13-1.217.379-1.735.723l-.766-.77-1.42 1.408.775.78a5 5 0 0 0-.724 1.758H.75v2h1.085a5 5 0 0 0 1.58 2.747l1.329-1.494A3 3 0 0 1 3.735 7.25c0-1.664 1.337-3 2.97-3a2.95 2.95 0 0 1 2.276 1.072l1.538-1.279a4.97 4.97 0 0 0-2.814-1.692V1.25h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudSnow_02;
