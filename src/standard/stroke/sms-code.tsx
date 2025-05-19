import React from "react";
const SmsCode: React.FC<
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
        d="m6 10 2 2m0-2-2 2M11 10l2 2m0-2-2 2M16 10l2 2m0-2-2 2M19 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 18v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2m0-14a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19v.01"
      />
    </svg>
  );
};
export default SmsCode;
