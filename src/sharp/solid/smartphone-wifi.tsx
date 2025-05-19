import React from "react";
const SmartphoneWifi: React.FC<
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
        d="M3.999 5.25h4.953l3.669 5c0 1.376 1.113 2.5 2.497 2.5h.006q.325 0 .625-.079V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75M10.5 18h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.112 1.25c-2.098 0-4.031.775-5.625 2.071l1.262 1.552c1.28-1.04 2.776-1.623 4.363-1.623 1.591 0 3.092.586 4.374 1.633l1.265-1.55c-1.596-1.303-3.535-2.083-5.64-2.083M15.112 5.45a6.1 6.1 0 0 0-3.24.942l1.054 1.7a4.1 4.1 0 0 1 2.186-.641 4.1 4.1 0 0 1 2.195.648L18.365 6.4a6.1 6.1 0 0 0-3.253-.95M15.117 9.25a1 1 0 0 0-.997 1c0 .552.446 1 .997 1h.006c.55 0 .997-.448.997-1s-.446-1-.997-1z"
      />
    </svg>
  );
};
export default SmartphoneWifi;
