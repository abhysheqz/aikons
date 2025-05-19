import React from "react";
const WebValidation: React.FC<
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
        d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.78 4.78-1.06-1.06-2.47 2.47-.97-.97-1.06 1.06 2.03 2.03z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.226 1.25a.977.977 0 0 0-.976.975v17.55c0 .538.438.975.977.975h7.81V18.8H3.202V8.75h16.595v1.276h1.952v-7.8a.976.976 0 0 0-.976-.976zM5.491 4H7.5v2H5.49zM11.5 4H9.49v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebValidation;
