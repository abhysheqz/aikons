import React from "react";
const Radio_02: React.FC<
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
        d="M2 13c0-3.3 0-4.95.879-5.975C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121 1.025S22 9.7 22 13s0 4.95-.879 5.975C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-1.025S2 16.3 2 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 15h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 20v2m12-2v2M5 6l14-4M9 11H6"
      />
      <circle
        cx={15}
        cy={13}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Radio_02;
