import React from "react";
const QrCode_01: React.FC<
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
        d="M13.25 15.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v3A.75.75 0 0 1 18 19h-4a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 3.5a1 1 0 0 0-1 1V9a1 1 0 0 1-2 0V4.5a3 3 0 0 1 3-3H9a1 1 0 0 1 0 2zm9.5-1a1 1 0 0 1 1-1h4.5a3 3 0 0 1 3 3V9a1 1 0 1 1-2 0V4.5a1 1 0 0 0-1-1H15a1 1 0 0 1-1-1M2.5 14a1 1 0 0 1 1 1v4.5a1 1 0 0 0 1 1H9a1 1 0 1 1 0 2H4.5a3 3 0 0 1-3-3V15a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1v4.5a3 3 0 0 1-3 3H15a1 1 0 1 1 0-2h4.5a1 1 0 0 0 1-1V15a1 1 0 0 1 1-1M13 5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h6V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.293 5.293A1 1 0 0 1 6 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 .293-.707M5 18a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M17 9.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1M16 7.5V6a1 1 0 1 1 2 0v1.5a1 1 0 1 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QrCode_01;
