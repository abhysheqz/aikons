import React from "react";
const Ppt_01: React.FC<
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
        d="m3.251 1.25-.001 12.5h17.5V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236zM6 15.25H3.25v7.5h1.5v-3H6a2.25 2.25 0 0 0 0-4.5m0 3H4.75v-1.5H6a.75.75 0 0 1 0 1.5m6-3H9.25v7.5h1.5v-3H12a2.25 2.25 0 0 0 0-4.5m0 3h-1.25v-1.5H12a.75.75 0 0 1 0 1.5m8.75-3h-5.5v1.5h2v6h1.5v-6h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ppt_01;
