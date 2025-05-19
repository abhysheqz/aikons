import React from "react";
const UserLock_01: React.FC<
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
        d="M20.492 15.14v-.89a2.502 2.502 0 1 0-5.004 0v.89h-1.736v6.608h8.496V15.14zm-3.504-.89a1.002 1.002 0 0 1 2.004 0v.89h-2.005z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.502 20.75v-6.86h1.753v-.011a7.7 7.7 0 0 0-2.998-1.43A5.252 5.252 0 0 0 9.502 2.25a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 1.752 20v.75z"
      />
    </svg>
  );
};
export default UserLock_01;
