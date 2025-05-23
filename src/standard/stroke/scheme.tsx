import React from "react";
const Scheme: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 21v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1ZM7 21v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1ZM7 6V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1ZM22 6V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 13.5v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Z"
      />
      <path
        fill="currentColor"
        d="M3.75 13.5a.75.75 0 0 0 1.5 0zm1.5-6.455a.75.75 0 0 0-1.5 0zM10.5 3.75a.75.75 0 0 0 0 1.5zm6.5 1.5a.75.75 0 0 0 0-1.5zm3.25 5.25a.75.75 0 0 0-1.5 0zm-1.5 6.5a.75.75 0 0 0 1.5 0zm-3.78-.97a.75.75 0 1 0 1.06-1.06zM5.25 13.5V7.045h-1.5V13.5zm5.25-8.25H17v-1.5h-6.5zm8.25 5.25V17h1.5v-6.5zm-2.72 4.47-1.5-1.5-1.06 1.06 1.5 1.5z"
      />
    </svg>
  );
};
export default Scheme;
