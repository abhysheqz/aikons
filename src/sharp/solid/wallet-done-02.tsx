import React from "react";
const WalletDone_02: React.FC<
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
        d="M15.75 6.498H4.64l11.11-4.746zM12.078 15.834l-6.414 6.414-3.414-3.414 1.414-1.414 2 2 5-5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 22.249H7.43l6.416-6.416-3.182-3.182-5 5-2-2-1.414 1.414V7.749h19.5zm-4.25-8.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WalletDone_02;
