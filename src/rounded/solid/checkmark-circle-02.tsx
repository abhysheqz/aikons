import React from "react";
const CheckmarkCircle_02: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12m15.426-3.737a1 1 0 0 1 .061 1.413l-5.5 6a1 1 0 0 1-1.444.031l-2.5-2.5a1 1 0 1 1 1.414-1.414l1.762 1.761 4.794-5.23a1 1 0 0 1 1.413-.061"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_02;
