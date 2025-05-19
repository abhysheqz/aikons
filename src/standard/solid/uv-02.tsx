import React from "react";
const Uv_02: React.FC<
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
        d="M6.25 13a5.75 5.75 0 0 1 11.5 0 .75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M4.294 5.293a1 1 0 0 1 1.414 0l1.5 1.499a1 1 0 0 1-1.415 1.414l-1.5-1.499a1 1 0 0 1 0-1.414m15.412 0a1 1 0 0 1 0 1.414l-1.499 1.5a1 1 0 1 1-1.414-1.415l1.499-1.5a1 1 0 0 1 1.414 0M1 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M12.629 15.072a1 1 0 0 1 1.3.557l1.571 3.929 1.572-3.93a1 1 0 1 1 1.857.744l-2 5A1 1 0 0 1 16 22h-1a1 1 0 0 1-.928-.628l-2-5a1 1 0 0 1 .557-1.3M6 15a1 1 0 0 1 1 1v4h2v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Uv_02;
