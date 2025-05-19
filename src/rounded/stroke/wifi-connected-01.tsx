import React from "react";
const WifiConnected_01: React.FC<
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
        strokeWidth={1.5}
        d="M12 20.5c-.983 0-1.714-.997-3.176-2.991L3.487 9.731c-1.079-1.473-1.619-2.209-1.46-3.154.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 2c2.904 0 5.617.873 7.92 2.387 1.262.83 1.893 1.244 2.053 2.19.159.945-.381 1.681-1.46 3.154L16 16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 13a13.25 13.25 0 0 0-14 0M21 10C15.455 6 8.545 6 3 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16 16a8.5 8.5 0 0 0-8 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 19s1 0 2 2c0 0 3.177-5 6-6"
      />
    </svg>
  );
};
export default WifiConnected_01;
