import React from "react";
const WifiOff_02: React.FC<
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
        d="M10.75 18.5c0-.69.56-1.25 1.25-1.25h.012a1.25 1.25 0 1 1 0 2.5H12c-.69 0-1.25-.56-1.25-1.25M7.77 14.818c1.842-1.969 4.938-2.222 7.117-1.308l-.774 1.844c-1.587-.666-3.735-.397-4.883.83a1 1 0 0 1-1.46-1.367M10.465 9.86a1 1 0 0 1-.701 1.228c-1.218.333-2.345.906-3.557 2.118a1 1 0 1 1-1.414-1.414C6.26 10.325 7.695 9.58 9.236 9.16a1 1 0 0 1 1.228.7M13.285 9.919a1 1 0 0 1 1.14-.837c2.195.504 3.633 1.46 4.734 2.67a1 1 0 1 1-1.325 1.497c-.93-1.123-2.004-1.844-3.712-2.19a1 1 0 0 1-.837-1.14M7.065 6.24a1 1 0 0 1-.498 1.324c-1.326.6-2.574 1.357-3.86 2.643a1 1 0 0 1-1.414-1.414c1.489-1.489 2.95-2.373 4.45-3.051a1 1 0 0 1 1.322.498M9.766 4.763c4.579-.875 8.762.493 12.882 3.972a1 1 0 1 1-1.29 1.528c-3.737-3.155-7.324-4.28-11.217-3.536a1 1 0 0 1-.375-1.964"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiOff_02;
