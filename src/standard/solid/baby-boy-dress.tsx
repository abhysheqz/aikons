import React from "react";
const BabyBoyDress: React.FC<
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
        d="M8.748 2h-3a.75.75 0 0 0-.45.15L1.304 5.146a.76.76 0 0 0-.265.848l1.494 4.481a.76.76 0 0 0 1.112.412l1.353-.812v2.056h13.5v-2.056l1.354.812a.76.76 0 0 0 1.112-.412l1.494-4.481a.76.76 0 0 0-.265-.848L18.197 2.15a.75.75 0 0 0-.45-.15h-3a.75.75 0 0 0-.75.75c0 1.153-1.025 2.25-2.25 2.25-1.224 0-2.25-1.097-2.25-2.25a.75.75 0 0 0-.75-.75M18.5 13.5H5v5.25a2.75 2.75 0 0 0 2.75 2.75h8a2.75 2.75 0 0 0 2.75-2.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BabyBoyDress;
