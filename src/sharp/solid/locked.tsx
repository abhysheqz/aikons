import React from "react";
const Locked: React.FC<
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
        d="M1.5 1.5h7.644v2H3.5v5.644h-2zm19 2h-5.644v-2H22.5v7.644h-2zm2 11.356V22.5h-7.644v-2H20.5v-5.644zM3.5 20.5v-5.644h-2V22.5h7.644v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.25 9.75V9a3.25 3.25 0 0 0-6.5 0v.75h-2v8.5h10.5v-8.5zm-5-.75a1.75 1.75 0 0 1 3.5 0v.75h-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Locked;
