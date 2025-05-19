import React from "react";
const PeerToPeer_02: React.FC<
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
        d="M5.5 2.992a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 20.988h-7c0-1.655 1.567-2.998 3.5-2.998s3.5 1.343 3.5 2.998Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 12.494a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.5 4 7-.001v4.997H18l-2-1.5M12 19.989H5v-4.997h.5l2 1.5M9 11.478H2C2 9.823 3.567 8.48 5.5 8.48S9 9.823 9 11.478Z"
      />
    </svg>
  );
};
export default PeerToPeer_02;
