import React from "react";
const MailMinus_02: React.FC<
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
        d="M1.25 3.5A.75.75 0 0 1 2 2.75h20a.75.75 0 0 1 .75.75v12.75H13.5v5H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 12.901l6.416-4.277-.832-1.248L12 11.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 19.5h-8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailMinus_02;
