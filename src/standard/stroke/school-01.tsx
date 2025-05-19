import React from "react";
const School_01: React.FC<
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
        d="M7 22V10.5l5-4 5 4V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 22v-6l-4-2M3 22v-6l4-2M2 22h20M12 6.5V4.982m0 0V2l3.5 1v1.982zM10 22v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4"
      />
    </svg>
  );
};
export default School_01;
