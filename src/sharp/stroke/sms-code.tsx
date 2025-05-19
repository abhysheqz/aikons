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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m6 10 2 2m0-2-2 2M11 10l2 2m0-2-2 2M16 10l2 2m0-2-2 2M21 7H3v8h18zM19 4V2H5v2m0 14v4h14v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M12 19v.01"
      />
    </svg>
  );
};
export default SmsCode;
