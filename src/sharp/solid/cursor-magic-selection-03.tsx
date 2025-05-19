import React from "react";
const CursorMagicSelection_03: React.FC<
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
        d="M10 1.25v3.888H8.056V1.249zM3.68 2.304l2.834 2.833-1.375 1.375L2.306 3.68zM15.75 3.68l-2.833 2.833-1.375-1.375 2.833-2.833zM1.25 8.055h3.889v1.944H1.25zm5.264 4.86L3.68 15.75l-1.375-1.375 2.833-2.833z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.182 22.75 7.25 7.25l15.5 4.932-5.287 3.194 4.935 4.908-2.123 2.123-4.922-4.921z"
      />
    </svg>
  );
};
export default CursorMagicSelection_03;
