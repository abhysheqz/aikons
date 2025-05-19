import React from "react";
const Uv_03: React.FC<
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
        d="M6.25 13a5.75 5.75 0 1 1 11.5 0 .75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75M10.996 4a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m6.66 1.926a1 1 0 0 1 1.414 0l.007.006a1 1 0 0 1-1.415 1.414l-.006-.006a1 1 0 0 1 0-1.414m-11.31 0a1 1 0 0 1 0 1.415l-.006.006a1 1 0 1 1-1.414-1.414l.006-.007a1 1 0 0 1 1.414 0M3 11.996a1 1 0 0 1 1 1v.009a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v.009a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1M6 15a1 1 0 0 1 1 1v4h2v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4a1 1 0 0 1 1-1M12.629 15.072a1 1 0 0 1 1.3.557l1.571 3.929 1.572-3.93a1 1 0 1 1 1.857.744l-2 5A1 1 0 0 1 16 22h-1a1 1 0 0 1-.928-.628l-2-5a1 1 0 0 1 .557-1.3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Uv_03;
