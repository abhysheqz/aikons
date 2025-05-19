import React from "react";
const AlignBoxMiddleRight: React.FC<
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
        d="M3 1.256a.75.75 0 0 0-.75.75v19.987c0 .415.336.75.75.75l18 .007a.75.75 0 0 0 .75-.75V2.013a.75.75 0 0 0-.75-.75zM17 8.5H7v2h10zm0 5h-5v2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignBoxMiddleRight;
