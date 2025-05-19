import React from "react";
const StrokeTop: React.FC<
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
        d="M6 6v14h12V6h2v16H4V6zM2 1.998h20v2H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeTop;
