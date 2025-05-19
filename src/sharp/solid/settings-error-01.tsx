import React from "react";
const SettingsError_01: React.FC<
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
        d="M22.746 17.75a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5.74-2.5v2.5h1.5v-2.5zm1.5 3.75h-1.51v1.5h1.51z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.294 2a.75.75 0 0 1 .75-.75h5.905a.75.75 0 0 1 .75.75v2.152l1.143.672 1.822-1.069a.75.75 0 0 1 1.032.276l2.952 5.197a.75.75 0 0 1-.272 1.017l-1.831 1.074v.563a6.5 6.5 0 0 0-2.799-.632c-.797 0-1.56.143-2.266.406a3.5 3.5 0 1 0-3.828 3.827 6.5 6.5 0 0 0-.406 2.267c0 2.01.913 3.808 2.347 5h-4.55a.75.75 0 0 1-.75-.75v-2.152l-1.142-.672-1.822 1.069a.75.75 0 0 1-1.032-.276l-2.953-5.196a.75.75 0 0 1 .273-1.018l1.83-1.074v-1.362l-1.83-1.074a.75.75 0 0 1-.273-1.017L4.297 4.03a.75.75 0 0 1 1.031-.276l1.823 1.069 1.143-.672z"
      />
    </svg>
  );
};
export default SettingsError_01;
