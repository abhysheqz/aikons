import React from "react";
const MailDownload_02: React.FC<
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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v14.275l-1.457-1.371v-3.818h-4.5v3.818l-3.225 3.139 1.707 1.707H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.901l6.416-4.277-.832-1.248L12 10.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.043 12.836v5.586l1.293-1.293 1.414 1.414-3.707 3.707-3.707-3.707 1.414-1.414 1.293 1.293v-5.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailDownload_02;
