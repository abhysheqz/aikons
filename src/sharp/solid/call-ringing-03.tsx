import React from "react";
const CallRinging_03: React.FC<
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
        d="m19.875 21 2.625-4.43c-6.3-6.093-14.7-6.093-21 0L4.125 21 7.8 19.338l.525-3.323c2.1-1.107 5.25-1.107 7.35 0l.525 3.323z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3v5h-2V3zM6 5.586 9.415 9 8 10.414 4.586 7zM19.415 7 16 10.414 14.586 9 18 5.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallRinging_03;
