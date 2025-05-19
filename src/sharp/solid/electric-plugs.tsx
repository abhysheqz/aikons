import React from "react";
const ElectricPlugs: React.FC<
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
        d="M10.002 4.25h4V2h2v2.25h2.497a.75.75 0 0 1 .75.75v6.5a7.25 7.25 0 0 1-6.247 7.181V22h-2v-3.318A7.25 7.25 0 0 1 4.748 11.5V5a.75.75 0 0 1 .75-.75h2.504V2h2zm3.147 4.122-1.36 2.378h3l-2.64 4.622-1.303-.744 1.36-2.378h-3l2.64-4.622z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricPlugs;
