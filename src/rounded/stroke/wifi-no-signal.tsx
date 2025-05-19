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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20.513 10.801-5.337 6.874C13.714 19.558 12.983 20.5 12 20.5s-1.714-.942-3.176-2.825l-5.337-6.874c-1.079-1.39-1.619-2.085-1.46-2.979.16-.893.79-1.285 2.053-2.068A14.97 14.97 0 0 1 12 3.5c2.904 0 5.617.825 7.92 2.254 1.262.783 1.893 1.175 2.053 2.068.159.894-.381 1.589-1.46 2.98Z"
      />
    </svg>
  );
};
export default WifiNoSignal;
