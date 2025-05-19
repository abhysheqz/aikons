import React from "react";
const RamadhanMonth: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m12 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2.5a3 3 0 0 0-3 3V20a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V5.5a3 3 0 0 0-3-3zm16 5v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2zm-9.083 3.984a1 1 0 0 1-.34 1.373 2.229 2.229 0 1 0 3.059 3.059 1 1 0 1 1 1.713 1.032 4.229 4.229 0 1 1-5.804-5.804 1 1 0 0 1 1.372.34M14.5 12a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RamadhanMonth;
