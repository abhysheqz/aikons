import React from "react";
const PeerToPeer_01: React.FC<
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
        d="M13.5 5H17a2 2 0 0 1 2 2v2.646a.354.354 0 0 1-.354.354v0a.35.35 0 0 1-.25-.104L17 8.5M10.5 19H7a2 2 0 0 1-2-2v-2.646c0-.196.158-.354.354-.354v0c.093 0 .183.037.25.104L7 15.5M18 19.5h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm0 0V22m0 0h1.5M18 22h-1.5M6 8h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm0 0v2.5m0 0h1.5m-1.5 0H4.5"
      />
    </svg>
  );
};
export default PeerToPeer_01;
