import React from "react";
const Hospital_02: React.FC<
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
        d="M7.47 1.47A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53m1.28 1.28v6.5h6.5v-6.5zM22 22.75H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 5.25V4h1.5v1.25H14v1.5h-1.25V8h-1.5V6.75H10v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.47 5.47A.75.75 0 0 1 4 5.25h4a.75.75 0 0 1 .75.75v3.257h6.5V6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-4.75V17a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v5.75H4a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .22-.53M9.009 12H7v2h2.009zM13 12h-2.009v2H13zm4.001 0h-2.009v2h2.01z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.75 17.75v5h-3.5v-5z" />
    </svg>
  );
};
export default Hospital_02;
