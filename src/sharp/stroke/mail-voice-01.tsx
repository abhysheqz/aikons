import React from "react";
const MailVoice_01: React.FC<
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
        d="M22 11V2H2v17h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 5.5 10 5 10-5M14.496 17.997c.62 1.042 1.975 2.01 3.497 2.004m0 0c1.229-.004 2.575-.572 3.504-2.003m-3.504 2.003V22M18 17.136a1.817 1.817 0 0 1-1.817-1.817v-1.502a1.817 1.817 0 0 1 3.634 0v1.502A1.817 1.817 0 0 1 18 17.136Z"
      />
    </svg>
  );
};
export default MailVoice_01;
