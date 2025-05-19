import React from "react";
const Structure_02: React.FC<
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
        d="M7.25 3c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v1H18a3 3 0 0 1 3 3v3.25c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 21 15.75h-2A1.75 1.75 0 0 1 17.25 14v-2c0-.966.784-1.75 1.75-1.75V7a1 1 0 0 0-1-1h-1.25A1.75 1.75 0 0 1 15 7.75h-2v5.657a3.252 3.252 0 0 1 0 6.186V22a1 1 0 1 1-2 0v-2.407a3.252 3.252 0 0 1 0-6.186V7.75H9A1.75 1.75 0 0 1 7.25 6H6a1 1 0 0 0-1 1v3.25c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 5 15.75H3A1.75 1.75 0 0 1 1.25 14v-2c0-.966.784-1.75 1.75-1.75V7a3 3 0 0 1 3-3h1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_02;
