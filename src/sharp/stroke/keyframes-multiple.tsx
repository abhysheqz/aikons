import React from "react";
const KeyframesMultiple: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m14 12-6 7-6-7 6-7z" />
      <path stroke="currentColor" strokeWidth={1.5} d="m12 19 6-7-6-7" />
      <path stroke="currentColor" strokeWidth={1.5} d="m16 19 6-7-6-7" />
    </svg>
  );
};
export default KeyframesMultiple;
