import React from "react";
const DeliverySecure_02: React.FC<
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
        d="M9 10.925a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M3 6.875a1 1 0 0 1 1 1v11a1 1 0 0 0 1 1h5.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-11a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M17.5 13.875c-.69 0-1.25.56-1.25 1.25v.75h2.5v-.75c0-.69-.56-1.25-1.25-1.25m2.75 2v-.75a2.75 2.75 0 1 0-5.5 0v.75H14a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 3.875c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 21 8.625H3a1.75 1.75 0 0 1-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliverySecure_02;
