import React from "react";
const Select_01: React.FC<
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
        d="M5 1a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H6v2a1 1 0 0 1-2 0V6H2a1 1 0 0 1 0-2h2V2a1 1 0 0 1 1-1M11 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m6 0a1 1 0 0 1 1-1h.5A4.5 4.5 0 0 1 23 8.5V9a1 1 0 1 1-2 0v-.5A2.5 2.5 0 0 0 18.5 6H18a1 1 0 0 1-1-1M5 11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M5 17a1 1 0 0 1 1 1v.5A2.5 2.5 0 0 0 8.5 21H9a1 1 0 1 1 0 2h-.5A4.5 4.5 0 0 1 4 18.5V18a1 1 0 0 1 1-1m17 0a1 1 0 0 1 1 1v.5a4.5 4.5 0 0 1-4.5 4.5H18a1 1 0 1 1 0-2h.5a2.5 2.5 0 0 0 2.5-2.5V18a1 1 0 0 1 1-1m-11 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Select_01;
