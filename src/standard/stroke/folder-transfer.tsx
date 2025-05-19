import React from "react";
const FolderTransfer: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 3.5c4.2 0 6 2.4 6 6l-2-1M8.5 20.5c-4.2 0-6-2.4-6-6l2 1M5.879 2.497l-2.38.002a1 1 0 0 0-.999 1V10.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.502a1 1 0 0 0-1.003-1l-3.998.01-.723-1.46a1 1 0 0 0-.897-.555M17.224 13.056a1 1 0 0 1 .897-.555l2.38.002a1 1 0 0 1 .999 1v7a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-4.997a1 1 0 0 1 1.002-1l3.998.01z"
      />
    </svg>
  );
};
export default FolderTransfer;
