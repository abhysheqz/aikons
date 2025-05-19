import React from "react";
const MailAccount_02: React.FC<
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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v15.509a5.5 5.5 0 0 0-1.462-1.251 3.75 3.75 0 1 0-5.576 0 5.5 5.5 0 0 0-2.57 3.492H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.901l6.416-4.277-.832-1.248L12 10.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 14.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14.25 21.5a4.25 4.25 0 0 1 8.5 0v.75h-8.5z"
      />
    </svg>
  );
};
export default MailAccount_02;
