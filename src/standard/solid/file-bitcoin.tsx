import React from "react";
const FileBitcoin: React.FC<
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
        d="M10.829 1a3 3 0 0 0-2.12.877L2.881 7.693A3 3 0 0 0 2 9.817v10.185a3 3 0 0 0 3 3h6.5a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1v-10h4a3 3 0 0 0 3-3V3h7a1 1 0 0 1 1 1v5.5a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 12a1 1 0 0 1 1 1h.25a2.75 2.75 0 0 1 2.121 4.5A2.75 2.75 0 0 1 19.25 22H19a1 1 0 1 1-2 0h-2a1 1 0 1 1 0-2v-5a1 1 0 1 1 0-2h2a1 1 0 0 1 1-1m-1 3v1.5h2.25a.75.75 0 0 0 0-1.5zm2.25 3.5H17V20h2.25a.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileBitcoin;
