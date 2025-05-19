import React from "react";
const WifiDisconnected_03: React.FC<
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
        d="M10.75 18c0-.69.557-1.25 1.244-1.25.683 0 1.256.56 1.256 1.25s-.573 1.25-1.256 1.25c-.687 0-1.244-.56-1.244-1.25M7.543 14.293c2.39-2.39 6.523-2.39 8.914 0a1 1 0 0 1-1.414 1.414c-1.61-1.61-4.476-1.61-6.086 0a1 1 0 0 1-1.414-1.414M4.86 11.232c2.619-2.183 5.768-3.077 8.792-2.613a1 1 0 0 1-.304 1.977c-2.416-.371-4.996.33-7.208 2.172a1 1 0 0 1-1.28-1.536m12.854.079a1 1 0 0 1 1.412-.093l.037.033a1 1 0 0 1-1.326 1.498l-.03-.027a1 1 0 0 1-.093-1.412M1.355 8.236C4.986 5.169 9.02 3.732 13.075 4.04a1 1 0 0 1-.15 1.994c-3.449-.262-6.98.942-10.28 3.729a1 1 0 0 1-1.29-1.528"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.293 4.293a1 1 0 0 1 1.414 0L19 6.586l2.293-2.293a1 1 0 1 1 1.414 1.414L20.414 8l2.293 2.293a1 1 0 0 1-1.414 1.414L19 9.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 8l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiDisconnected_03;
