import React from "react";
const AccountSetting_02: React.FC<
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
        d="M9.047 1.25a.75.75 0 0 0-.75.75v2.152l-1.143.672-1.822-1.069a.75.75 0 0 0-1.031.276L1.348 9.228a.75.75 0 0 0 .273 1.017l1.83 1.074v1.362l-1.83 1.074a.75.75 0 0 0-.273 1.018l2.953 5.196a.75.75 0 0 0 1.031.276l1.822-1.069 1.143.672V22c0 .414.336.75.75.75h5.906a.75.75 0 0 0 .75-.75v-2.152l1.143-.672 1.822 1.069a.75.75 0 0 0 1.031-.276l2.953-5.196a.75.75 0 0 0-.273-1.018l-1.83-1.074v-1.362l1.83-1.074a.75.75 0 0 0 .273-1.017L19.7 4.03a.75.75 0 0 0-1.031-.276l-1.822 1.069-1.143-.672V2a.75.75 0 0 0-.75-.75zm2.954 5.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M9.15 16.375A3.29 3.29 0 0 1 12 14.73c1.218 0 2.281.66 2.851 1.645l1.299-.75A4.79 4.79 0 0 0 12 13.23a4.79 4.79 0 0 0-4.149 2.394z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AccountSetting_02;
