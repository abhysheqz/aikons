import React from "react";
const CustomerSupport: React.FC<
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
        d="M5 9c0-3.314 3.134-6 7-6s7 2.686 7 6M19 17v2a2 2 0 0 1-2 2h-5M4.105 9.599l-1.66 1.104a1 1 0 0 0-.445.833v2.928a1 1 0 0 0 .446.833L4.105 16.4A1.863 1.863 0 0 0 7 14.851v-3.702a1.863 1.863 0 0 0-2.895-1.55M18.03 9.483a1.86 1.86 0 0 1 1.865.116l1.66 1.104a1 1 0 0 1 .445.833v2.928a1 1 0 0 1-.446.833L19.895 16.4a1.86 1.86 0 0 1-1.865.116v0A1.86 1.86 0 0 1 17 14.851v-3.702c0-.706.399-1.35 1.03-1.666"
      />
    </svg>
  );
};
export default CustomerSupport;
