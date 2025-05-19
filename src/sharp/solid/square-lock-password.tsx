import React from "react";
const SquareLockPassword: React.FC<
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
        d="M20.75 8.25H3.25v14.5h17.5zM10.509 14.5H8.5v2h2.009zm4.991 0h-2.009v2H15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareLockPassword;
