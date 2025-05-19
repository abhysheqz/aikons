import React from "react";
const ElectricHome_02: React.FC<
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
        d="M13.492 1.893a2.75 2.75 0 0 0-2.994-.014L2.72 6.877a2.75 2.75 0 0 0-1.22 2.8l1.907 10.616a2.75 2.75 0 0 0 2.71 2.264l5.136-.006v-3.993h-.214a1.75 1.75 0 0 1-1.457-.779l-1.535-2.303a1.75 1.75 0 0 1-.294-.97v-2.698a.75.75 0 0 1 .75-.75h.75v-1.25a.75.75 0 0 1 1.5 0v1.25h2.5v-1.25a.75.75 0 1 1 1.5 0v1.25h.75a.75.75 0 0 1 .75.75v2.698c0 .345-.102.683-.294.97l-1.535 2.303a1.75 1.75 0 0 1-1.456.78h-.215v3.99l5.099.002a2.75 2.75 0 0 0 2.704-2.25L22.497 9.81a2.75 2.75 0 0 0-1.197-2.8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricHome_02;
