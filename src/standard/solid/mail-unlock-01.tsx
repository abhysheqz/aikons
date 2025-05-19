import React from "react";
const MailUnlock_01: React.FC<
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
        d="M3.932 2A2.93 2.93 0 0 0 1 4.932v11.73a2.93 2.93 0 0 0 2.932 2.932h7.071a.977.977 0 0 0 0-1.955h-7.07a.977.977 0 0 1-.978-.977V7.217l7.595 3.797a2.69 2.69 0 0 0 2.404 0l7.595-3.797v1.897a.977.977 0 1 0 1.954 0V4.932A2.93 2.93 0 0 0 19.572 2zm13.07 11.797a1.25 1.25 0 0 1 2.333-.625.75.75 0 1 0 1.298-.75 2.75 2.75 0 0 0-5.131 1.375v.75h-.75a.75.75 0 0 0-.75.75v5.5c0 .414.335.75.75.75h7a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75h-4.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailUnlock_01;
