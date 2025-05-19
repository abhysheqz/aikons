import React from "react";
const YenSend: React.FC<
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
        d="m19 14.5 2.5-2.5L19 9.5M15 12h5.891M2.5 4 8 10.611m0 0L13.5 4M8 10.611V20M5.5 13.5h5m-5 3h5"
      />
    </svg>
  );
};
export default YenSend;
