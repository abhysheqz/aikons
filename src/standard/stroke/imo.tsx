import React from "react";
const Imo: React.FC<
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
        d="M6.509 9H6.5m.001 2v4m1.912 0v-2.75c0-.69.535-1.25 1.196-1.25s1.195.56 1.195 1.25m0 0V15m0-2.75c0-.69.536-1.25 1.196-1.25s1.196.56 1.196 1.25V15m1.913-2.75v1.5c0 .69.535 1.25 1.195 1.25s1.196-.56 1.196-1.25v-1.5c0-.69-.535-1.25-1.196-1.25s-1.195.56-1.195 1.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.998 22.002C17.522 22.002 22 17.524 22 12S17.522 1.998 11.998 1.998 1.996 6.476 1.996 12c0 1.889.434 3.498 1.344 5.005l-1.323 4.976a.01.01 0 0 0 .013.012l4.938-1.327c1.513.92 3.13 1.336 5.03 1.336"
      />
    </svg>
  );
};
export default Imo;
