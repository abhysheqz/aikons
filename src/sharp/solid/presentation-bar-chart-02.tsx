import React from "react";
const PresentationBarChart_02: React.FC<
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
        d="M11 20.194v1.556h2v-1.556h.98l1.187 1.556 1.583-1.167-1.484-1.944a1 1 0 0 0-.792-.389H13v-2h-2v2H9.526a1 1 0 0 0-.792.389L7.25 20.583l1.583 1.167 1.188-1.556z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 1.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75zM13 13V6h-2v7zm-4 0V9H7v4zm8 0v-3h-2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationBarChart_02;
