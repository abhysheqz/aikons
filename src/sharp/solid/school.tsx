import React from "react";
const School: React.FC<
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
        d="M11.532 6.414a.75.75 0 0 1 .937 0l5 4a.75.75 0 0 1 .281.586v11h-5v-4h-1.5v4h-5V11a.75.75 0 0 1 .281-.586zM13.009 12H11v2h2.009z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.335 12.33 4.415 2.206V22h-1.5v-6.536l-3.586-1.793zM3.75 15.464l3.585-1.793-.67-1.342-4.415 2.207V22h1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 21.25h21.5v1.5H1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 2a.75.75 0 0 1 .75-.75c2.217 0 3.466.844 4.123 1.823.314.468.469.933.546 1.28.04.174.081.385.081.63v.75h-4V7a.75.75 0 0 1-1.5 0z"
      />
    </svg>
  );
};
export default School;
