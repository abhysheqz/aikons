import React from "react";
const StrokeLeft: React.FC<
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
        d="M6 4h16v16H6v-2h14V6H6zM4 2v20H2V2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeLeft;
