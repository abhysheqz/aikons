import React from "react";
const Tap_04: React.FC<
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
        d="M8.5 15v-4m0 0V6.018a1.518 1.518 0 0 1 3.036 0V11.5H16a2.5 2.5 0 0 1 2.5 2.5v5.5A2.5 2.5 0 0 1 16 22H9.693a2 2 0 0 1-1.76-1.05l-1.516-2.807S5.5 16.5 5.5 15.53c-.007-.302.03-.604.106-.895.172-.646.614-1.19 1.5-2.28z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.04 6a4 4 0 0 0-8 0"
      />
    </svg>
  );
};
export default Tap_04;
