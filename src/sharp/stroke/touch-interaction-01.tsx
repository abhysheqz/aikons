import React from "react";
const TouchInteraction_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7.992H3V2h18v5.992h-4.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.557 21.976v-2.018l-4.015-5.223c-.782-1.004-.672-1.89 0-2.547.82-.702 1.572-.484 2.31.217l.962 1.079.884.95V6.643A1.64 1.64 0 0 1 11.34 5.01c.906 0 1.64.733 1.64 1.638v3.462c1.323 0 2.314.106 3.58.52.548.178 1.084.45 1.562.772 1.343.909 1.734 1.587 1.847 2.294.254 2.924-1.61 5.397-1.934 6.296v2.01"
      />
    </svg>
  );
};
export default TouchInteraction_01;
