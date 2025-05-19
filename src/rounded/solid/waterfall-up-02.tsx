import React from "react";
const WaterfallUp_02: React.FC<
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
        d="M1 21a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M4 19a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1M8 15a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1M12 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1M16 12a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1M20 6a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaterfallUp_02;
