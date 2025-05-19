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
        d="M20.945 20.946 3.079 3.081A2.66 2.66 0 0 0 2.25 5v14A2.75 2.75 0 0 0 5 21.752h14a2.74 2.74 0 0 0 1.945-.805M21.75 18.217v-1.465h-1.465zM18.786 15.252h2.964v-2.5H18a.25.25 0 0 0-.25.25v1.215zM18.75 5.002c0-1.52-1.304-2.75-2.912-2.75H5.786l1.832 1.832h8.22c.536 0 .971.41.971.917v1.25H9.785l6.487 6.487A1.75 1.75 0 0 1 18 11.252h3.75v-2.25A2.75 2.75 0 0 0 19 6.252h-.25z"
      />
      <path
        fill="currentColor"
        d="M1.543 1.544a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 0 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};
export default WalletNotFound_01;
