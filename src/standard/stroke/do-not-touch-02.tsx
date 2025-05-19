import React from "react";
const DoNotTouch_02: React.FC<
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
        d="m2 2 20 20M14.5 5.448V4a1.5 1.5 0 0 0-3 0v1m3 .448a1.5 1.5 0 0 1 3 .052V8m-3-2.552V5.5m0-.052v5.053M17.5 8v5m0-5a1.5 1.5 0 0 1 3 0v8.5M11.5 5a1.5 1.5 0 0 0-2.935-.435M11.501 5v2.5m-3 1V14l-2.308-2.163a1.683 1.683 0 0 0-2.423 2.26l4.14 6.48a2 2 0 0 0 1.685.923h7.906a3 3 0 0 0 2.562-1.438"
      />
    </svg>
  );
};
export default DoNotTouch_02;
