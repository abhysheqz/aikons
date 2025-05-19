import React from "react";
const LimitOrder: React.FC<
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
        d="M2 6h3.914l4.38 4.38a4 4 0 1 1-1.543 1.285L5.086 8H2zm10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m10 3v-2.01h-2V15zm-3 .01V13h-2v2.01zM4 13v2.01H2V13zm3 .01v2.01H5v-2.01zM13 15v-2.01h-2V15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LimitOrder;
