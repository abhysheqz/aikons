import React from "react";
const Rar_02: React.FC<
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
        d="M19 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2m-.5-2h-4.502a2 2 0 0 1-2-2V2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16.5V14h1.75a1.25 1.25 0 1 1 0 2.5M7 16.5V19m0-2.5h1.75m0 0L10 19m8-2.5V14h1.75a1.25 1.25 0 1 1 0 2.5m-1.75 0V19m0-2.5h1.75m0 0L21 19m-9 0 1.75-5h.5L16 19m-3-1.5h2"
      />
    </svg>
  );
};
export default Rar_02;
