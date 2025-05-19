import React from "react";
const UserCheck_01: React.FC<
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
        d="m21.75 14.547-6.674 7.203-3.826-3.786 1.371-1.357 2.394 2.369 5.305-5.726z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.473 17.963 2.816 2.787H2.25V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.25a5.25 5.25 0 0 1 1.755 10.2 7.76 7.76 0 0 1 4.65 3.186l-1.429 1.542-2.355-2.33z"
      />
    </svg>
  );
};
export default UserCheck_01;
