import React from "react";
const MailSearch_02: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v9.5h-1.5V2.75H2.75v15.5H11v1.5H2a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v13.604a5.551 5.551 0 1 0-10.294 4.146H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.401l6.416-4.277-.832-1.248L12 9.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.252 17.55a4.3 4.3 0 1 1 7.934 2.296l1.564 1.559-1.341 1.345-1.567-1.562a4.3 4.3 0 0 1-6.59-3.639m4.3-2.4a2.4 2.4 0 1 0 0 4.799 2.4 2.4 0 0 0 0-4.8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSearch_02;
