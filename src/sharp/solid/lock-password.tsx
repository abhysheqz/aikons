import React from "react";
const LockPassword: React.FC<
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
        d="M12 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 8.25h17.5v14.5H3.25zM17 16.5v-2.01h-2v2.01zm-4-2.01v2.01h-2v-2.01zM9 16.5v-2.01H7v2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockPassword;
