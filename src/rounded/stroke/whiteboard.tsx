import React from "react";
const Whiteboard: React.FC<
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
        d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12.017 4.5 9.6c.828-.801 2.172-.801 3 0 .828.8.828 2.098 0 2.899a2 2 0 0 0 0 2.9c.828.8 2.172.8 3 0l.5-.484"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.672 13H13v-1.672a2 2 0 0 1 .586-1.414l5.476-5.475a1.5 1.5 0 0 1 2.121 0l.379.379a1.5 1.5 0 0 1 0 2.121l-5.476 5.475a2 2 0 0 1-1.414.586Z"
      />
    </svg>
  );
};
export default Whiteboard;
