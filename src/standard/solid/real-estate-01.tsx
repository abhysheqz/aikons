import React from "react";
const RealEstate_01: React.FC<
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
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M9 9.952a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 13.911a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.745 2a.75.75 0 0 0-1.047-.688L2.702 4.337a.75.75 0 0 0-.452.688v16.977c0 .414.336.75.75.75h6.995a.75.75 0 0 0 .75-.75zM6.492 6.958a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM14.298 1.312A.75.75 0 0 0 13.25 2v20a.75.75 0 0 0 .75.75h6.995a.75.75 0 0 0 .75-.75V5.025a.75.75 0 0 0-.452-.688zm3.194 5.646a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RealEstate_01;
