import React from "react";
const WalletNotFound_01: React.FC<
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
        d="M2.664 1.251 22.75 21.337l-1.414 1.414L1.25 2.665z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 21.752 3.08 3.082a2.66 2.66 0 0 0-.83 1.92v14A2.75 2.75 0 0 0 5 21.752zM21.75 18.217v-1.465h-1.465zM18.785 15.252h2.965v-2.5h-4v1.465zM21.75 6.252h-3v-4H5.785l1.832 1.832h9.192v2.167H9.784l6.466 6.466v-1.465h5.5z"
      />
    </svg>
  );
};
export default WalletNotFound_01;
