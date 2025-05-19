import React from "react";
const UserBlock_01: React.FC<
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
        d="M13.25 17.25a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m2.172-.914a2.5 2.5 0 0 0 3.241 3.241zm1.414-1.414 3.242 3.242a2.5 2.5 0 0 0-3.241-3.241"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.51 13.367A5.73 5.73 0 0 0 12 17.25c0 1.317.443 2.53 1.188 3.5H1.75V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 9.5 2.25a5.25 5.25 0 0 1 1.755 10.2c.807.186 1.566.5 2.255.917"
      />
    </svg>
  );
};
export default UserBlock_01;
