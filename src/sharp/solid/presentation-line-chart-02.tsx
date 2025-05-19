import React from "react";
const PresentationLineChart_02: React.FC<
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
        d="M11 20.694v1.556h2v-1.556h.98l1.187 1.556 1.583-1.167-1.484-1.944a1 1 0 0 0-.792-.389H13v-2h-2v2H9.526a1 1 0 0 0-.792.389L7.25 21.083l1.583 1.167 1.188-1.556z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 1.75a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-14a.75.75 0 0 0-.75-.75zm8.207 5.543a1 1 0 0 0-1.414 0l-3 3 1.414 1.414L10.5 9.414l2.293 2.293a1 1 0 0 0 1.414 0l3-3-1.414-1.414L13.5 9.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationLineChart_02;
