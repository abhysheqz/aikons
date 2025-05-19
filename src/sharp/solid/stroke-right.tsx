import React from "react";
const StrokeRight: React.FC<
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
        d="M2 4h16v2H4v12h14v2H2zM21.998 2v20h-2V2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeRight;
