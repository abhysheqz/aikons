import React from "react";
const MapsLocation_01: React.FC<
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
        d="M11.379 19.265 8.75 18.138V1.506l5.5 2.357v6.72a6.75 6.75 0 0 0-3.5 5.917c0 1.038.25 1.962.629 2.765M15.75 9.979V4.25H21c.966 0 1.75.784 1.75 1.75v6.257A6.74 6.74 0 0 0 17.5 9.75a6.8 6.8 0 0 0-1.75.229M7.25 1.537 2.217 4.053a1.75 1.75 0 0 0-.967 1.565v11.995a1.75 1.75 0 0 0 2.303 1.66l3.697-1.232z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 11.25a5.25 5.25 0 0 0-5.25 5.25c0 1.707.897 3.066 1.857 4.033.964.97 2.063 1.623 2.644 1.932.47.25 1.028.25 1.498 0 .581-.31 1.68-.962 2.644-1.932.96-.967 1.857-2.326 1.857-4.033 0-2.9-2.35-5.25-5.25-5.25m-.009 3.248c-1.1 0-1.991.896-1.991 2s.891 2 1.991 2h.018c1.1 0 1.991-.895 1.991-2s-.891-2-1.991-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapsLocation_01;
