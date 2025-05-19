import React from "react";
const FullScreen: React.FC<
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
        d="M5 4a1 1 0 0 0-1 1v3.5a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3h3.5a1 1 0 0 1 0 2zm9.5-1a1 1 0 0 1 1-1H19a3 3 0 0 1 3 3v3.5a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3.5a1 1 0 0 1-1-1M3 14.5a1 1 0 0 1 1 1V19a1 1 0 0 0 1 1h3.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3.5a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1V19a3 3 0 0 1-3 3h-3.5a1 1 0 1 1 0-2H19a1 1 0 0 0 1-1v-3.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FullScreen;
