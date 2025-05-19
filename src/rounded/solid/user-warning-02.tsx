import React from "react";
const UserWarning_02: React.FC<
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
        d="M6.379 14.312C7.86 13.636 9.62 13.25 11.5 13.25s3.64.386 5.121 1.062c1.479.674 2.129 2.222 2.129 3.658V19A1.75 1.75 0 0 1 17 20.75H6A1.75 1.75 0 0 1 4.25 19v-1.03c0-1.436.65-2.984 2.129-3.658M7.25 7.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserWarning_02;
