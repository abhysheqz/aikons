import React from "react";
const MailSetting_01: React.FC<
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
        d="M22 11V2H2v17h8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 5.5 10 5 10-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 20.214V22m0-1.786a3.36 3.36 0 0 1-2.774-1.43m2.774 1.43a3.36 3.36 0 0 0 2.774-1.43M17.5 13.785c1.157 0 2.176.568 2.774 1.43m-2.774-1.43a3.36 3.36 0 0 0-2.774 1.43m2.774-1.43V12m4.5 2-1.726 1.217M13 20l1.726-1.217M13 14l1.726 1.217M22 20l-1.726-1.217m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"
      />
    </svg>
  );
};
export default MailSetting_01;
