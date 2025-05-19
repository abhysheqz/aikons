import React from "react";
const FileLink: React.FC<
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
        d="M5.17 3.17c.56-.56 1.468-.56 2.028 0a.75.75 0 1 0 1.06-1.06A2.934 2.934 0 1 0 4.11 6.257l1.93 1.93a2.934 2.934 0 0 0 3.99.15.75.75 0 0 0-.98-1.137A1.434 1.434 0 0 1 7.1 7.128l-1.93-1.93a1.434 1.434 0 0 1 0-2.028M7.95 5.799a1.434 1.434 0 0 1 1.949.073l1.93 1.93A1.434 1.434 0 0 1 9.802 9.83a.75.75 0 0 0-1.06 1.06 2.934 2.934 0 0 0 4.149-4.148l-1.93-1.93a2.934 2.934 0 0 0-3.99-.15.75.75 0 0 0 .98 1.137"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.27 7.186 4.588 4.589a4.184 4.184 0 0 0 5.917-5.917L9.168 1.252h8.665a2.924 2.924 0 0 1 2.917 2.932v10.763a.98.98 0 0 1-.285.692l-6.809 6.827a.97.97 0 0 1-.687.286H6.168a2.925 2.925 0 0 1-2.917-2.936zm15.534 7.355-6.237 6.255v-4.755a1.5 1.5 0 0 1 1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileLink;
