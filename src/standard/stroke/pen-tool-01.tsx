import React from "react";
const PenTool_01: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.5 13-2.045-4.694a.492.492 0 0 0-.91 0L9.5 13M6.5 20.5l1.802-6.758A1 1 0 0 1 9.268 13h5.464a1 1 0 0 1 .966.742L17.5 20.5"
      />
    </svg>
  );
};
export default PenTool_01;
