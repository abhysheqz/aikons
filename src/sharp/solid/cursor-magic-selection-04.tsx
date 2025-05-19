import React from "react";
const CursorMagicSelection_04: React.FC<
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
        d="M10 1.25v3.888H8.056V1.25zM3.68 2.304l2.834 2.833-1.375 1.375L2.306 3.68zM15.75 3.68l-2.833 2.833-1.375-1.375 2.833-2.833zM1.25 8.055h3.889v1.944H1.25zm5.264 4.861L3.68 15.749l-1.375-1.375 2.833-2.833z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m7.25 7.25 15.5 6.027-6.889 2.583-2.583 6.89z"
      />
    </svg>
  );
};
export default CursorMagicSelection_04;
