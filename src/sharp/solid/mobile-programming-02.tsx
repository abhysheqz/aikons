import React from "react";
const MobileProgramming_02: React.FC<
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
        d="M5.22 1.25h13.56c.258 0 .504.103.686.286a.98.98 0 0 1 .283.692l-.001 4.863h-1.937V3.205H6.19V7.09H4.25V2.227c0-.54.434-.977.97-.977m12.593 19.546-.002-3.886 1.937-.001.002 4.863c0 .26-.102.508-.283.692a.96.96 0 0 1-.685.286H5.219a.96.96 0 0 1-.685-.286.98.98 0 0 1-.284-.691l.001-4.864H6.19l-.001 3.887z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 19h-3v-2h3z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.001 7V2h14l-.002 5M5 17v5h14L19 17"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.293 8.292-1.414 1.414L18.17 12l-2.292 2.293 1.414 1.414L21 12zM6.707 8.292l1.415 1.415L5.829 12l2.293 2.293-1.415 1.414L3 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileProgramming_02;
