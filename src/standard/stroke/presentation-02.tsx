import React from "react";
const Presentation_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12M2 17h20M12 17v5M7 22l5-3 5 3"
      />
    </svg>
  );
};
export default Presentation_02;
