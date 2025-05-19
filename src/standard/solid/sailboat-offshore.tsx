import React from "react";
const SailboatOffshore: React.FC<
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
        d="M14.127 1.008a1 1 0 0 1 .767.545l4 8A1 1 0 0 1 18 11H7a1 1 0 0 1-.753-1.658l7-8a1 1 0 0 1 .88-.334"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.13 20.756c1.63-1.01 3.73-1.005 5.372 0q.042.024.08.054c.47.264 1.083.253 1.541-.032l.007-.004a5.19 5.19 0 0 1 5.392 0l.007.004c.457.285 1.083.29 1.6-.022a5.14 5.14 0 0 1 4.155-.542 1 1 0 0 1-.568 1.917 3.14 3.14 0 0 0-2.537.327l-.008.005c-1.12.68-2.556.722-3.696.015a3.19 3.19 0 0 0-3.298 0 3.54 3.54 0 0 1-3.635.04 1 1 0 0 1-.174-.11 3.15 3.15 0 0 0-3.189.05l-.008.005a3.54 3.54 0 0 1-3.7-.006A1 1 0 1 1 2.53 20.76c.47.294 1.097.3 1.6-.003"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 13.25a.75.75 0 0 0-.75.75c0 1.346.526 3.252 2.357 4.874a6.68 6.68 0 0 1 5.717.626h.004l.012-.001.017-.01a6.69 6.69 0 0 1 6.942.002q.019 0 .051-.017a6.5 6.5 0 0 1 2.344-.88c1.588-1.558 2.056-3.325 2.056-4.594a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default SailboatOffshore;
