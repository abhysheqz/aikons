import React from "react";
const Mp3_01: React.FC<
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
        d="m3.251 1.25-.001 12.5h17.5V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236zM4.584 15.25H3.25v7.5h1.5v-4.356L6 20.436l1.25-2.04v4.354h1.5v-7.5H7.42L6 17.564zm7.666 0h-2.5v7.5h1.5v-2.5h1a2.5 2.5 0 0 0 0-5m0 3.5h-1v-2h1a1 1 0 1 1 0 2m8.5-3.5h-5v2.5h1.5v-1h2v1.5h-1.451v1.5h1.451v1.5h-2v-1h-1.5v2.5h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mp3_01;
