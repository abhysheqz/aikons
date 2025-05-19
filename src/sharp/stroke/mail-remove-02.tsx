import React from "react";
const MailRemove_02: React.FC<
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
        d="M22 11.5v-9H2v17h10"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m6 7 6 4 6-4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 14.5 3.5 3.5m0 0 3.5 3.5M18.5 18 15 21.5m3.5-3.5 3.5-3.5"
      />
    </svg>
  );
};
export default MailRemove_02;
