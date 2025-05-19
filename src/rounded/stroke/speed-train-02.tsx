import React from "react";
const SpeedTrain_02: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 3h4.733c2.61 0 3.916 0 5.135.401s2.269 1.177 4.37 2.728l3.69 2.726.08.06A5 5 0 0 1 22 12.958v.073A2 2 0 0 1 20.032 15H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 11h4.095c2.594 0 3.89 0 5.09.451 1.2.45 2.213 1.319 4.239 3.055L16 15M10 7h7M2 19h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 19v2M12 19v2M6 19v2"
      />
    </svg>
  );
};
export default SpeedTrain_02;
