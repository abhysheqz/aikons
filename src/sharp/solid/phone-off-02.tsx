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
        d="M19.25 1.25v14.464L4.785 1.25zm-14.5 21.5v-18l14.5 14.5v3.5zM12 18.5a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.664 1.25 22.75 21.336l-1.414 1.414L1.25 2.664z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PhoneOff_02;
