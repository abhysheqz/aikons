import React from "react";
const CustomerService: React.FC<
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
        d="M5.082 11.746a21.4 21.4 0 0 0 3.165 4.006 21.5 21.5 0 0 0 4.006 3.165l3.578-3.838 6.918 3.94c-1.004 1.864-3.412 4.248-6.471 3.632-1.446-.292-2.873-.778-4.598-1.768a23.3 23.3 0 0 1-4.833-3.726 23.3 23.3 0 0 1-3.73-4.838c-.99-1.725-1.477-3.152-1.769-4.597C.732 4.662 3.116 2.254 4.98 1.25l3.94 6.918z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 6.25h3.5v4h-2v1h2v1.5h-3.5v-4h2v-1h-2zm5.857 0v2.5h.643v-2.5h1.5v6.5h-1.5v-2.5h-2.143v-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.458 4.542a6.117 6.117 0 0 0-8.898.262l-1.12-.998q.148-.165.307-.325a7.617 7.617 0 1 1 10.447 11.08l-.998-1.121q.135-.12.262-.248a6.117 6.117 0 0 0 0-8.65"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerService;
