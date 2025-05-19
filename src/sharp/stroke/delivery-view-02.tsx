import React from "react";
const DeliveryView_02: React.FC<
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
        d="M3 7.5v13h7m11-13V13"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9.5 10.5h5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 18h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 21.5c2.761 0 5-3.5 5-3.5s-2.239-3.5-5-3.5-5 3.5-5 3.5 2.239 3.5 5 3.5ZM21.9 2.5H2.1a.1.1 0 0 0-.1.1v4.9h20V2.6a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default DeliveryView_02;
