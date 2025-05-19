import React from "react";
const Xsl_02: React.FC<
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
        d="M18.5 14v5h2M8 14l1.5 2.5m0 0L11 19m-1.5-2.5L11 14m-1.5 2.5L8 19M16 14h-2.5v2.5H16V19h-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 22h-14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2M19 9h-4.502a2 2 0 0 1-2-2V2.5"
      />
    </svg>
  );
};
export default Xsl_02;
