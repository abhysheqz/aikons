import React from "react";
const DeliveryTruck_01: React.FC<
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
        d="M1.25 7A.75.75 0 0 1 2 6.25h6a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 3A.75.75 0 0 1 2 9.25h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 5v-.75a1 1 0 0 1 1-1h12.66a1 1 0 0 1 1 1v1.484c3.912.436 6.84 3.465 6.84 7.238v4.375a.975.975 0 0 1-.977.972h-1.608a3.42 3.42 0 0 1-3.279 2.431 3.42 3.42 0 0 1-3.278-2.43h-3.216a3.42 3.42 0 0 1-3.278 2.43 3.42 3.42 0 0 1-3.281-2.438l-1.58.005a1 1 0 0 1-1.003-1V12H6a2 2 0 0 0 1.732-3H8a2 2 0 1 0 0-4zm14.66 9.085V7.694c2.903.415 4.886 2.664 4.886 5.278v3.403h-.63a3.42 3.42 0 0 0-3.28-2.43q-.51.002-.977.14m-.204 2.398.016-.021c.268-.349.69-.573 1.165-.573.81 0 1.465.653 1.465 1.458 0 .806-.656 1.458-1.465 1.458-.81 0-1.466-.652-1.466-1.458 0-.324.106-.623.285-.864m-10.058.864c0-.805.656-1.458 1.466-1.458s1.466.653 1.466 1.458c0 .806-.657 1.458-1.466 1.458-.81 0-1.466-.652-1.466-1.458"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryTruck_01;
