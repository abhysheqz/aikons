import React from "react";
const QrCode: React.FC<
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
        d="M12 14.5V13a1 1 0 0 1 1-1h7.5m-2 3H20a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.5m-.5-2.5a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V15m-3 2.5v2m2.5 1.5h1M3 12h6M12 3v5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1ZM9 20v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1ZM21 8V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"
      />
    </svg>
  );
};
export default QrCode;
