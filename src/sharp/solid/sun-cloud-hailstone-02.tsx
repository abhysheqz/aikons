import React from "react";
const SunCloudHailstone_02: React.FC<
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
        d="M13.5 15.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.5 18.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.5 22.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.5 19.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.5 21.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19.5 21.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        d="M6.353 7.865a5.752 5.752 0 0 0-.769 11.058 2.5 2.5 0 0 1 1.48-.11 2.5 2.5 0 0 1 3-3 2.5 2.5 0 1 1 4.872 0q.272-.061.564-.063a2.5 2.5 0 0 1 2.436 3.064 2.5 2.5 0 0 1 1.66.189 5.252 5.252 0 0 0-.85-10.2 6.25 6.25 0 0 0-12.393-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.705 1.851c-.63.13-1.217.379-1.735.723l-.766-.77-1.42 1.408.775.78a5 5 0 0 0-.724 1.758H.75v2h1.085a5 5 0 0 0 1.58 2.747l1.329-1.494A3 3 0 0 1 3.735 6.75c0-1.664 1.337-3 2.97-3a2.95 2.95 0 0 1 2.276 1.072l1.538-1.279a4.97 4.97 0 0 0-2.814-1.692V.75h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudHailstone_02;
