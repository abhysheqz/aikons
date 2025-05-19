import React from "react";
const MailDownload_01: React.FC<
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
        d="M1.25 3.224c0-.538.438-.974.977-.974h19.546c.54 0 .977.436.977.974V12h-1.954V8.102L12 12.5 3.205 8.102v10.7H12v1.948H2.227a.975.975 0 0 1-.977-.974z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 12.336v5.586l1.293-1.293 1.414 1.414L18 21.75l-3.707-3.707 1.414-1.414L17 17.922v-5.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailDownload_01;
