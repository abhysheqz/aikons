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
        d="M13.46 2.597c.666-.76 1.836-.8 2.55-.085l5.478 5.478a1.747 1.747 0 0 1-.084 2.55l-2.296 2.008-7.656-7.656zM10.282 5.843l7.875 7.875-2.233 5.806a.75.75 0 0 1-.58.47L3.06 22l5.614-5.614c.43.236.876.327 1.259.361a.75.75 0 1 0 .132-1.494c-.356-.032-.657-.125-.898-.347a1 1 0 0 0-.074-.074c-.222-.24-.315-.542-.347-.898a.75.75 0 1 0-1.494.133c.034.382.125.828.361 1.258L2 20.94 4.006 8.656a.75.75 0 0 1 .47-.58z"
      />
    </svg>
  );
};
export default PenTool_03;
