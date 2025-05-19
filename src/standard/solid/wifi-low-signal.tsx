import React from "react";
const WifiLowSignal: React.FC<
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
        d="M11.995 2.25c-3.487 0-6.693 1.21-9.217 3.234-1.118.896-1.171 2.46-.4 3.525l4.763 6.572 1.362-.642a9.47 9.47 0 0 1 7.008.011l1.32.656 4.78-6.597c.773-1.065.72-2.63-.398-3.525a14.7 14.7 0 0 0-9.218-3.234"
      />
      <path
        fill="currentColor"
        d="m15.938 16.838-1.077-.536a7.7 7.7 0 0 0-5.743.005l-1.08.51 2.54 3.506a1.75 1.75 0 0 0 2.834 0z"
      />
    </svg>
  );
};
export default WifiLowSignal;
