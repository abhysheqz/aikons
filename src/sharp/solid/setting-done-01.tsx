import React from "react";
const SettingDone_01: React.FC<
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
        d="M22.75 17.75a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5.407 2.562 2.983-3.581-1.152-.96-2.015 2.418-.923-.784-.97 1.144z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.297 2a.75.75 0 0 1 .75-.75h5.906a.75.75 0 0 1 .75.75v2.152l1.143.672 1.822-1.069a.75.75 0 0 1 1.031.276l2.953 5.197a.75.75 0 0 1-.273 1.017l-1.83 1.074v.563a6.5 6.5 0 0 0-2.8-.632c-.796 0-1.56.143-2.266.406a3.5 3.5 0 1 0-3.827 3.827 6.5 6.5 0 0 0-.406 2.267c0 2.01.912 3.808 2.346 5H9.047a.75.75 0 0 1-.75-.75v-2.152l-1.143-.672-1.822 1.069a.75.75 0 0 1-1.031-.276l-2.953-5.196a.75.75 0 0 1 .272-1.018l1.831-1.074v-1.362l-1.83-1.074a.75.75 0 0 1-.273-1.017L4.3 4.03a.75.75 0 0 1 1.032-.276l1.822 1.069 1.143-.672z"
      />
    </svg>
  );
};
export default SettingDone_01;
