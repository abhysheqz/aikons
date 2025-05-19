import React from "react";
const WaveTriangle: React.FC<
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
        d="M3 12h4.34a1 1 0 0 1 .92.606l2.584 6.029A.603.603 0 0 0 12 18.397V5.603a.603.603 0 0 1 1.157-.238l2.583 6.029a1 1 0 0 0 .92.606H21"
      />
    </svg>
  );
};
export default WaveTriangle;
