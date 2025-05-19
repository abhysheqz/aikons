import React from "react";
const SevenZ_01: React.FC<
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
        d="m3.25 13.75.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 16.75v-1.5h5.5v1.441L7.896 22.75h-1.66l2.773-6zM18.75 21.25v1.5h-5.5v-1.513l3.59-4.487h-3.59v-1.5h5.5v1.513l-3.59 4.487z"
      />
    </svg>
  );
};
export default SevenZ_01;
