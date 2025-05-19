import React from "react";
const Router_01: React.FC<
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
        d="M11.993 1.75c-1.73 0-3.32.64-4.626 1.702L8.63 5.003c.992-.806 2.146-1.253 3.364-1.253 1.222 0 2.38.45 3.373 1.261l1.265-1.55c-1.309-1.068-2.903-1.711-4.638-1.711M11.993 5.11c-.98 0-1.898.288-2.697.784l1.054 1.7a3.1 3.1 0 0 1 1.643-.484c.582 0 1.14.17 1.65.488l1.059-1.697a5.1 5.1 0 0 0-2.71-.79M12 8.75a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12.75a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75zm3 5.75h4.997v-2H5zm7.995-2h2.008v2h-2.008zm3.997 0H19v2h-2.008z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Router_01;
