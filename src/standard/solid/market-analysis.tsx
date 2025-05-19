import React from "react";
const MarketAnalysis: React.FC<
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
        d="M11.75 2a1 1 0 0 1 1 1v2.25c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75V21a1 1 0 1 1-2 0v-2.25A1.75 1.75 0 0 1 9 17V7c0-.966.784-1.75 1.75-1.75V3a1 1 0 0 1 1-1M16 6c0-.966.784-1.75 1.75-1.75V3a1 1 0 1 1 2 0v1.25c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75V13a1 1 0 1 1-2 0v-1.25A1.75 1.75 0 0 1 16 10zM3.75 9.25A1.75 1.75 0 0 0 2 11v4c0 .966.784 1.75 1.75 1.75V18a1 1 0 1 0 2 0v-1.25A1.75 1.75 0 0 0 7.5 15v-4a1.75 1.75 0 0 0-1.75-1.75V8a1 1 0 0 0-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MarketAnalysis;
