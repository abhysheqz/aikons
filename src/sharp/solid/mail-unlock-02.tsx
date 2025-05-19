import React from "react";
const MailUnlock_02: React.FC<
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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75V14h-.28a4 4 0 0 0-7.94 0H13v6.25H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.901l6.416-4.277-.832-1.248L12 10.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.75 14.5a2.75 2.75 0 0 1 4.812-1.82l-1.124.993a1.25 1.25 0 0 0-2.188.827v.75h5.5v7h-8.5v-7h1.5z"
      />
    </svg>
  );
};
export default MailUnlock_02;
