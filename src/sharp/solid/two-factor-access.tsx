import React from "react";
const TwoFactorAccess: React.FC<
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
        d="M8.5 4.25A2.5 2.5 0 0 0 6 6.75v3.5H4.5v-3.5a4 4 0 1 1 8 0v3.5H11v-3.5a2.5 2.5 0 0 0-2.5-2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 8.75H1.25v12.5h14.5zm-7.713 9.347 4.522-5.168-1.13-.988-3.465 3.961L6.5 14.44 5.44 15.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 21.25h5.75V8.75H19.5v-2a4 4 0 0 0-6.25-3.308s.533.738.648 1.389A2.5 2.5 0 0 1 18 6.75v1.999h-1z"
      />
    </svg>
  );
};
export default TwoFactorAccess;
