import React from "react";
const ImageCounterClockwise: React.FC<
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
        d="m14.293 4.927.618-2.473-1.455-.364-1.358 5.432 4.919 1.405.412-1.442-3.01-.86a4.25 4.25 0 0 1 5.984 5.925l-.451.6 1.199.9.45-.599a5.75 5.75 0 0 0-7.308-8.524M1.25 6.25h9.875l-.535 2.14 7.284 2.082.838-2.936.038.026v14.188H1.25zm7.242 6.25v-2.01h-2v2.01zm.008 5L13 13l4.25 4.25v3H2.75v-2L6 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCounterClockwise;
