import React from "react";
const WifiNoSignal: React.FC<
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
        d="M2.785 6.484a14.7 14.7 0 0 1 9.218-3.234 14.7 14.7 0 0 1 9.218 3.234c1.117.896 1.17 2.46.398 3.525L13.42 21.324a1.75 1.75 0 0 1-2.834 0l-8.2-11.314c-.772-1.065-.718-2.63.4-3.525"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiNoSignal;
