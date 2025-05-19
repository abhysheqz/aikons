import React from "react";
const SunCloudLittleRain_02: React.FC<
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
        d="M11.501 16.75v-2.5h2v2.5zm-3.001 3v-2.5h2v2.5zm6 0v-2.5h2v2.5zm-8.5 3v-2.5h2v2.5zm5.5 0v-2.5h2v2.5zm5.5 0v-2.5h2v2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.353 8.365A5.752 5.752 0 0 0 4.259 18.75H7v-3h3.001v-3h5v3H18v3h3.083a5.251 5.251 0 0 0-2.336-9.447 6.25 6.25 0 0 0-12.394-.938"
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
export default SunCloudLittleRain_02;
