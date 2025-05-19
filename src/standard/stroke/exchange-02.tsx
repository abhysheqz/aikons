import React from "react";
const Exchange_02: React.FC<
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
        d="M3 3h1m2.25 3.5H4m2.25 0a1.75 1.75 0 1 0 0-3.5H5.5m.75 3.5a1.75 1.75 0 1 1 0 3.5H5.5M4 6.5V3m0 3.5V10m-1 0h1m0-7h1.5M4 10h1.5m0-7V2m0 8v1M15 17.5l3-4.5 3 4.5m-6 0 3 4.5 3-4.5m-6 0 3 1.125 3-1.125M12.5 5H17a2 2 0 0 1 2 2v2.616a.384.384 0 0 1-.384.384v0a.4.4 0 0 1-.213-.064L17 9M11.5 19H7a2 2 0 0 1-2-2v-2.616c0-.212.172-.384.384-.384v0c.076 0 .15.022.213.065L7 15"
      />
    </svg>
  );
};
export default Exchange_02;
