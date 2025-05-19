import React from "react";
const Line: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.954 8.521v4.003h.997M8.946 8.52v4.003m2.094 0V8.52l2.394 4.003V8.52m3.99 0h-1.896v2.002m0 0v2h1.895m-1.895-2h1.437"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.002 10.632c0 4.813 5.02 9.344 11.912 8.215v3.144c0 .008.01.013.016.008.126-.105.967-.808 1.245-1.12 2.126-2.383 6.693-5.977 6.823-10.247C21.998 5.82 17.548 2 12.026 2S2.002 5.819 2.002 10.632Z"
      />
    </svg>
  );
};
export default Line;
