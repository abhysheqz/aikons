import React from "react";
const MailSend_02: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75v13.275l-3.707-3.707-3.182 3.182.043.043h-3.818v4.957H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 12.401l6.416-4.277-.832-1.248L12 10.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.922 17.043-1.293-1.293 1.414-1.414 3.707 3.707-3.707 3.707-1.414-1.414 1.293-1.293h-5.586v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSend_02;
