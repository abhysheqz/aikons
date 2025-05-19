import React from "react";
const WifiDisconnected_04: React.FC<
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
        d="M12 21c-.983 0-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387 1.262.83 1.893 1.244 2.053 2.19.159.945-.381 1.681-1.46 3.154L19 12.699M21 15l-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default WifiDisconnected_04;
