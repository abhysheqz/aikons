import React from "react";
const MobileProgramming_02: React.FC<
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
        d="M7 1h10a3 3 0 0 1 3 3v2.5a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.5a1 1 0 1 1-2 0V4a3 3 0 0 1 3-3M5 16.5a1 1 0 0 1 1 1V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.5a1 1 0 1 1 2 0V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 19a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M16.793 8.793a1 1 0 0 0 0 1.414L18.586 12l-1.793 1.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 0 0-1.414 0M7.207 8.793a1 1 0 0 1 0 1.414L5.414 12l1.793 1.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileProgramming_02;
