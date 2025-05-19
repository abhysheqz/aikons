import React from "react";
const AirplaneTakeOff_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 19H5.985"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m21.999 7.991-2.496-1.49a.01.01 0 0 0-.012.003L17.5 9.007l-7.474-3.464c-4-1.789-8.13 1.325-8.023 2.702.056.254.147.74.783.932l6.203 1.835L10 13.518l.006.005 4.452 1.472a.01.01 0 0 0 .012-.013l-.966-2.968 6.492 1.505a.01.01 0 0 0 .012-.006l1.995-5.51A.01.01 0 0 0 22 7.991Z"
      />
    </svg>
  );
};
export default AirplaneTakeOff_02;
