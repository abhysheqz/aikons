import React from "react";
const StartUp_02: React.FC<
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
        strokeWidth={1.5}
        d="M6.45 12.013C11.75 1.933 18.353 1.817 20.99 3.02c1.178 2.691 1.064 9.426-8.817 14.834m-5.724-5.84 5.724 5.84m-5.724-5.84L2.5 8.106s2.975-4.105 7.055-1.479m2.62 11.226L15.71 21.5s3.96-2.986 1.51-7.097M5.709 14.5c-.632.632-1.706 2.464-.948 4.739 2.275.758 4.107-.316 4.739-.948"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 8.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
    </svg>
  );
};
export default StartUp_02;
