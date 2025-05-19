import React from "react";
const AttachmentCircle: React.FC<
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
        d="m8.569 12-.858-.858a2.426 2.426 0 1 1 3.431-3.431l5.147 5.147a2.426 2.426 0 1 1-3.431 3.431l-1.93-1.93c-1.411-1.41.618-3.313 2.072-1.859l1 1"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default AttachmentCircle;
