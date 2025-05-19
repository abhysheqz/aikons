import React from "react";
const RunningShoes: React.FC<
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
        d="M19.101 18H7.963c-2.934 0-4.4 0-5.295-1.117-1.697-2.12.237-7.76 1.408-9.883.397 2.4 4.486 2.333 5.975 2-.992-1.999.332-2.666.994-3h.002c2.953 3.5 9.268 5.404 10.815 9.219.669 1.648-1.236 2.781-2.76 2.781ZM22 15H2M13 10l3-3M15 12l3-3"
      />
    </svg>
  );
};
export default RunningShoes;
