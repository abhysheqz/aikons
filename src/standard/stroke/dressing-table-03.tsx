import React from "react";
const DressingTable_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 19c-.8 1.6 0 2.667.5 3M4.5 19c.8 1.6 0 2.667-.5 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 13H4c-.943 0-1.414 0-1.707.293S2 14.057 2 15v2c0 .943 0 1.414.293 1.707S3.057 19 4 19h16c.943 0 1.414 0 1.707-.293S22 17.943 22 17v-2c0-.943 0-1.414-.293-1.707S20.943 13 20 13Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 16h2M4 13V2M20 13V2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 3.5h3.672c.368 0 .552 0 .704-.05s.352-.196.752-.49c1.744-1.28 4-1.28 5.744 0 .4.294.6.44.752.49s.336.05.704.05H20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 7 1-1M10 9.5l2-2"
      />
    </svg>
  );
};
export default DressingTable_03;
