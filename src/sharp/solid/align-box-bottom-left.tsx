import React from "react";
const AlignBoxBottomLeft: React.FC<
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
        d="M3 1.257a.75.75 0 0 0-.75.75v19.987c0 .414.336.75.75.75l18 .006a.75.75 0 0 0 .75-.75V2.013a.75.75 0 0 0-.75-.75zM17 11H7v2h10zm-5 5H7v2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlignBoxBottomLeft;
