import React from "react";
const CallRinging_01: React.FC<
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
        stroke="#0A0101"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.001v2.85m6 .713L15.6 8.99M6 7.564 8.4 8.99"
      />
      <path
        stroke="#000"
        strokeWidth={1.5}
        d="m7.255 13.475-.154 4.49-5.051 1.987a.01.01 0 0 1-.014-.008c-.149-2.266.123-3.859 1.253-4.667 1.476-1.057 4.217-2.198 8.01-2.286 1.473-.132 3.434.002 5.498.62m0 0c2.162.65 4.742 1.406 5.143 3.633.088.491.096 2.044-.079 2.749a.01.01 0 0 1-.01.006l-5.054-2.034z"
      />
    </svg>
  );
};
export default CallRinging_01;
