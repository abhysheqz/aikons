import React from "react";
const Pdf_01: React.FC<
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
        d="m3.251 1.25-.001 12.5h17.5V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236zM6.25 15.25h-2.5v7.5h1.5v-2.5h1a2.5 2.5 0 0 0 0-5m0 3.5h-1v-2h1a1 1 0 1 1 0 2m5.75-3.5H9.75v7.5H12A2.75 2.75 0 0 0 14.75 20v-2A2.75 2.75 0 0 0 12 15.25m-.75 6v-4.5H12c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25zm9.5-6h-5v7.5h1.5v-3h3v-1.5h-3v-1.5h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pdf_01;
