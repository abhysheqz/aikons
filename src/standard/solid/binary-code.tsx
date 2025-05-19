import React from "react";
const BinaryCode: React.FC<
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
        d="M1 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm4 0H3v4h2zM12.5 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0h-2v4h2zM12.5 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0h-2v4h2zM5.5 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0h-2v4h2zM10.972 3.118A1 1 0 0 1 11.5 4v6a1 1 0 1 1-2 0V5.866a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M3.972 13.118A1 1 0 0 1 4.5 14v6a1 1 0 1 1-2 0v-4.134a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M22.472 3.118A1 1 0 0 1 23 4v6a1 1 0 1 1-2 0V5.866a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05M22.472 13.118A1 1 0 0 1 23 14v6a1 1 0 1 1-2 0v-4.134a1 1 0 0 1-1.055-1.698l1.5-1a1 1 0 0 1 1.027-.05"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BinaryCode;
