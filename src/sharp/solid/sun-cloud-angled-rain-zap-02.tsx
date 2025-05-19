import React from "react";
const SunCloudAngledRainZap_02: React.FC<
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
        d="m8.718 14.729 1.72 1.02-1.182 1.99h3L9.28 22.75l-1.72-1.02 1.181-1.99h-3zM14.606 21.792l1.5-3 1.788.894-1.5 3zM13.106 18.792l-1.5 3 1.788.894 1.5-3z"
      />
      <path
        fill="currentColor"
        d="M6.353 8.365a5.752 5.752 0 0 0-1.86 10.537l3.7-6.229 4.3 2.553-.603 1.013h3l-.81 1.364.753.377.6-1.2 4.473 2.236-.231.461a5.252 5.252 0 0 0-.928-10.174 6.25 6.25 0 0 0-12.394-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.705 2.351c-.63.13-1.217.38-1.735.724l-.766-.772-1.42 1.41.775.78a5 5 0 0 0-.724 1.757H.75v2h1.085a5 5 0 0 0 1.58 2.747l1.329-1.494A3 3 0 0 1 3.735 7.25c0-1.664 1.337-3 2.97-3a2.95 2.95 0 0 1 2.276 1.072l1.538-1.279a4.97 4.97 0 0 0-2.814-1.692v-1.1h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_02;
