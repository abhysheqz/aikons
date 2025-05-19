import React from "react";
const WifiError_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 17a5 5 0 0 1 1.44-1m6.06 1a5 5 0 0 0-1.44-1M18.5 14a10 10 0 0 0-3.5-2m-9.5 2A11 11 0 0 1 9 12.046M2 11c1.922-1.623 3.942-2.865 6-3.5M22 11c-1.922-1.623-3.942-2.865-6-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20h.012"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17 9.5 4h5z"
      />
    </svg>
  );
};
export default WifiError_02;
