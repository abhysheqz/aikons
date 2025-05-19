import React from "react";
const RecoveryMail: React.FC<
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
        d="M12 19H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 7 4.992 2.744a2.1 2.1 0 0 0 2.016 0L18 7M21.663 16a3.5 3.5 0 1 0-3.163 5c1.585 0 3.07-1.054 3.5-2.5m-.337-2.5v-2.5m0 2.5-2.235.158"
      />
    </svg>
  );
};
export default RecoveryMail;
