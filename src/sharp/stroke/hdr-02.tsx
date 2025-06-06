import React from "react";
const Hdr_02: React.FC<
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
        strokeWidth={1.5}
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 17v-3h1.5a1.5 1.5 0 0 1 0 3M18 17v2m0-2h1.5m0 0 1.5 2M12.5 19v-5h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2zM7 14v2.5M7 19v-2.5m0 0h3m0 0V19m0-2.5V14"
      />
    </svg>
  );
};
export default Hdr_02;
