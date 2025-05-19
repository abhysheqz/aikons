import React from "react";
const PhoneOff_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 4v11.715L5.573 2.037A2.74 2.74 0 0 1 7.5 1.25h9A2.75 2.75 0 0 1 19.25 4M4.75 20V4.75l14.5 14.5V20a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 4.75 20m7.24-1.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 0 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PhoneOff_02;
