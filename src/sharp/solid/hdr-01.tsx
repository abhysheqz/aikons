import React from "react";
const Hdr_01: React.FC<
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
        d="M4.75 15.25v3h2v-3h1.5v7.5h-1.5v-3h-2v3h-1.5v-7.5zM9.25 15.25h2.25A2.75 2.75 0 0 1 14.25 18v2a2.75 2.75 0 0 1-2.75 2.75H9.25zm1.5 1.5v4.5h.75c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM15.25 15.25h3a2.5 2.5 0 0 1 1.219 4.683l1.281 2.817H19l-1.14-2.5h-1.11v2.5h-1.5zm1.5 3.5h1.5a1 1 0 1 0 0-2h-1.5zM3.25 13.75l.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hdr_01;
