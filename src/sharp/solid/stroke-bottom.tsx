import React from "react";
const StrokeBottom: React.FC<
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
        d="M20 2v16h-2V4H6v14H4V2zM2 22v-2h20v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeBottom;
