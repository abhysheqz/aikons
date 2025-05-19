import React from "react";
const MailReceive_02: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75v12.793h-2.568l-3.139-3.225-5.475 5.475 2.707 2.707H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 12.401l6.416-4.277-.832-1.248L12 10.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.043 14.336 1.414 1.414-1.293 1.293h5.586v2h-5.586l1.293 1.293-1.414 1.414-3.707-3.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailReceive_02;
