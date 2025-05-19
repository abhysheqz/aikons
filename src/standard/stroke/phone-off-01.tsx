import React from "react";
const PhoneOff_01: React.FC<
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
        d="m2 2 20 20M18.5 18.5V20a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V5.5m.858-3.142A2 2 0 0 1 7.5 2h9a2 2 0 0 1 2 2v10.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2h-4l.5 1h3z"
      />
    </svg>
  );
};
export default PhoneOff_01;
