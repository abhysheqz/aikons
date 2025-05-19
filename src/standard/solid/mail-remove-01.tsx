import React from "react";
const MailRemove_01: React.FC<
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
        d="M1 4.932A2.93 2.93 0 0 1 3.932 2h15.64a2.93 2.93 0 0 1 2.932 2.932v6.095a.977.977 0 0 1-1.955 0V7.218l-7.595 3.797a2.69 2.69 0 0 1-2.404 0L2.955 7.218v9.444c0 .54.437.977.977.977h8.044a.977.977 0 0 1 0 1.955H3.932A2.93 2.93 0 0 1 1 16.66z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.46 14.09a1 1 0 0 1 0 1.414l-2.294 2.293 2.293 2.293a1 1 0 1 1-1.414 1.414l-2.294-2.292-2.292 2.292a1 1 0 0 1-1.414-1.414l2.292-2.293-2.291-2.292a1 1 0 0 1 1.414-1.414l2.291 2.292 2.294-2.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailRemove_01;
