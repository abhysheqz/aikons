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
        fill="currentColor"
        fillRule="evenodd"
        d="m6.605 17.855 1-2 1.79.895-1 2zm4.5 0 1-2 1.79.895-1 2zm4.5 0 1-2 1.79.895-1 2zm-8 4 1-2 1.79.895-1 2zm4.5 0 1-2 1.79.895-1 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.353 8.364A5.752 5.752 0 0 0 4.131 18.66l2.804-4.818 3.6 1.8.9-1.8 3.6 1.8.9-1.8 4.472 2.237-1.82 3.638a5.25 5.25 0 0 0 .16-10.415 6.25 6.25 0 0 0-12.394-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.705 2.35c-.63.13-1.217.38-1.735.724l-.766-.771-1.42 1.409.775.78a5 5 0 0 0-.724 1.758H.75v2h1.085a5 5 0 0 0 1.58 2.747l1.329-1.495A3 3 0 0 1 3.735 7.25c0-1.664 1.337-3 2.97-3a2.95 2.95 0 0 1 2.276 1.072l1.538-1.28a4.97 4.97 0 0 0-2.814-1.69V1.25h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudAngledRain_02;
