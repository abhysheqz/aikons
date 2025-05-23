import React from "react";
const Tap_05: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 21.5V20l-3.73-5.187a1.29 1.29 0 0 1 .024-1.61c.521-.645 1.527-.733 2.169-.19L8.5 14.5v-8a1.5 1.5 0 1 1 3 0v7m2.617-2h1.077c.891 0 1.614.672 1.614 1.5v1m-2.691-.5V12c0-.828-.723-1.5-1.615-1.5h-.538M18 21.5V20l.854-1.2c.42-.52.646-1.15.646-1.8v-2.5c0-1.105-.964-2-2.153-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6.5a4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default Tap_05;
