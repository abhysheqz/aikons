import React from "react";
const ArrowDownLeft_02: React.FC<
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
        d="m11 13 7-7M8.459 17.917l1.242-.113c2.012-.183 3.018-.274 3.254-.928s-.477-1.368-1.906-2.797L9.92 12.952c-1.428-1.429-2.142-2.143-2.796-1.906s-.745 1.242-.928 3.254l-.113 1.242c-.11 1.211-.165 1.817.197 2.18.362.361.968.306 2.179.196"
      />
    </svg>
  );
};
export default ArrowDownLeft_02;
