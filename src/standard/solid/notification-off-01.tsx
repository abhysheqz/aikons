import React from "react";
const NotificationOff_01: React.FC<
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
        d="M10 19c0 1.116.878 2 1.976 2C13.094 21 14 20.095 14 19h2c0 2.219-1.82 4-4.024 4C9.75 23 8 21.198 8 19z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.232 4.76A7.75 7.75 0 0 1 19.75 12v1.737l1.836 2.295a.75.75 0 0 1 .164.468v.5a.75.75 0 0 1-.383.654c-.095.053-.21.02-.287-.057L8.889 5.406c-.073-.074-.107-.183-.062-.276.08-.165.221-.3.406-.37M19 19.75H4A1.75 1.75 0 0 1 2.25 18v-1.5a.75.75 0 0 1 .164-.468l1.836-2.295V12c0-2.111.845-4.027 2.214-5.424z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.728 3.553a1.75 1.75 0 0 1 1.66-2.303h1.225a1.75 1.75 0 0 1 1.66 2.303l-.56 1.684A.75.75 0 0 1 13 5.75h-2a.75.75 0 0 1-.712-.513zM1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationOff_01;
