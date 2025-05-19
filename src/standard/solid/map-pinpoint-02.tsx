import React from "react";
const MapPinpoint_02: React.FC<
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
        d="M17.5 10.25c-2.89 0-5.25 2.317-5.25 5.194 0 1.653.683 2.942 1.946 4.037.697.603 1.912 1.84 2.52 2.696a.968.968 0 0 0 1.566.015c.635-.86 1.835-2.116 2.522-2.711 1.263-1.095 1.946-2.384 1.946-4.037 0-2.877-2.36-5.194-5.25-5.194m0 3.25a2 2 0 1 0 0 4h.009a2 2 0 1 0 0-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 10.08c0-4.87 3.91-8.83 8.75-8.83 4.425 0 8.073 3.31 8.666 7.6a7 7 0 0 0-1.166-.1 6.77 6.77 0 0 0-3.476.955A4 4 0 1 0 10.93 13.9a6.7 6.7 0 0 0-.18 1.544c0 1.813.655 3.293 1.783 4.513-.68.768-1.306 1.539-1.732 2.182a.962.962 0 0 1-1.602 0c-1.068-1.61-3.386-4.027-4.696-5.189-2.139-1.894-3.253-4.075-3.253-6.87"
      />
    </svg>
  );
};
export default MapPinpoint_02;
