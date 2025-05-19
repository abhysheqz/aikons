import React from "react";
const Sink_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14a7 7 0 0 0 6.93-6.003C19.008 7.45 18.552 7 18 7H6c-.552 0-1.008.45-.93.997A7 7 0 0 0 12 14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7V3.5a1.5 1.5 0 0 1 3 0V4M10 7V5a1 1 0 0 0-1-1H8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 13.5 14 22m-4.5-8.5L10 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 22h8"
      />
    </svg>
  );
};
export default Sink_01;
