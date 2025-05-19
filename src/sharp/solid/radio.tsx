import React from "react";
const Radio: React.FC<
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
        d="M14.555 2.914 8.109 7.36 7 5.695l6.445-4.445z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 6A.75.75 0 0 1 2 5.25h20a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm10 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M5 12.75h3v-1.5H5zm0 4h3v-1.5H5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radio;
