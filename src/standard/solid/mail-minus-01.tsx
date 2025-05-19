import React from "react";
const MailMinus_01: React.FC<
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
        d="M1 5.932A2.93 2.93 0 0 1 3.932 3h15.64a2.93 2.93 0 0 1 2.932 2.932v7.553a.978.978 0 0 1-1.955 0V8.218l-7.595 3.797a2.69 2.69 0 0 1-2.404 0L2.955 8.218v9.444c0 .54.437.977.977.977h7.062a.977.977 0 0 1 0 1.955H3.932A2.93 2.93 0 0 1 1 17.66z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.752 18.797a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailMinus_01;
