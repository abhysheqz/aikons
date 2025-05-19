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
        strokeWidth={1.5}
        d="M13 5h6v5h-.5l-2-1.5M11 19H5v-5h.5l2 1.5M18 19.5h4v-6h-8v6zm0 0V22m0 0h2m-2 0h-2M6 8h4V2H2v6zm0 0v2.5m0 0h2m-2 0H4"
      />
    </svg>
  );
};
export default PeerToPeer_01;
