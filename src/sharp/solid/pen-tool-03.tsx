import React from "react";
const PenTool_03: React.FC<
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
        d="M10.25 6.26 3.367 9.47 1.75 21.191l6.683-6.682-1.011-1.011 1.057-1.058 3.08 3.08-1.058 1.058-1.01-1.011-6.684 6.683 11.722-1.616 3.212-6.884zM15.052 1.969a.748.748 0 0 0-1.127.08l-2.474 3.298 7.202 7.202 3.298-2.474a.748.748 0 0 0 .08-1.127z"
      />
    </svg>
  );
};
export default PenTool_03;
