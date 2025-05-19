import React from "react";
const MusicNote_03: React.FC<
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
      <circle
        cx={6.5}
        cy={18.5}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle cx={18} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 18.5V7c0-.923 0-1.385.264-1.672.263-.287.754-.329 1.735-.413 4.023-.343 6.91-1.655 8.356-2.505.296-.174.444-.26.544-.203s.101.225.101.559V16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 10c5.867 0 9.778-2.333 11-3"
      />
    </svg>
  );
};
export default MusicNote_03;
