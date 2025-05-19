import React from "react";
const GpsDisconnected: React.FC<
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
        d="m20.457 4.957 2.293-2.293-1.414-1.414-2.293 2.293L16.75 1.25l-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293L22.75 7.25zM13.264 10.737a2.515 2.515 0 0 0-3.557 0L8.293 9.322a4.515 4.515 0 1 1 6.385 6.385l-1.415-1.414a2.515 2.515 0 0 0 0-3.556"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m19.095 19.627-.599.528a10.34 10.34 0 0 1-6.866 2.595c-5.733 0-10.38-4.647-10.38-10.38 0-2.632.98-5.037 2.595-6.866l.528-.599z"
      />
    </svg>
  );
};
export default GpsDisconnected;
