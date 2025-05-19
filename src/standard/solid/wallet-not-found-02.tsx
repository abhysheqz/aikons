import React from "react";
const WalletNotFound_02: React.FC<
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
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 1 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
      />
      <path
        fill="currentColor"
        d="M21.324 20.962A2.74 2.74 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-11l.004-.077A.75.75 0 0 1 3 7.75h5.112zM19 7.75a2.75 2.75 0 0 1 2.75 2.75v7.715L11.285 7.75zM13.777 1.75c1.09 0 1.973.883 1.973 1.973V6.5h-5.715L7.88 4.344l5.048-2.403.203-.083q.313-.108.646-.108"
      />
      <path
        fill="currentColor"
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 1 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
      />
      <path
        fill="currentColor"
        d="M21.324 20.962A2.74 2.74 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-11l.004-.077A.75.75 0 0 1 3 7.75h5.112zM19 7.75a2.75 2.75 0 0 1 2.75 2.75v7.715L11.285 7.75zM13.777 1.75c1.09 0 1.973.883 1.973 1.973V6.5h-5.715L7.88 4.344l5.048-2.403.203-.083q.313-.108.646-.108"
      />
    </svg>
  );
};
export default WalletNotFound_02;
