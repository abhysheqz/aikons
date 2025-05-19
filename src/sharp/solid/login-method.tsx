import React from "react";
const LoginMethod: React.FC<
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
      <path fill="currentColor" d="M5.5 6h13v10h-13z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a2 2 0 0 0-2 2v3H8V5a4 4 0 1 1 8 0v3h-2V5a2 2 0 0 0-2-2M10.5 17.172l1.5 1.5 1.5-1.5 1.414 1.414-1.5 1.5 1.5 1.5L13.5 23 12 21.5 10.5 23l-1.414-1.414 1.5-1.5-1.5-1.5zM17.586 17.172l1.5 1.5 1.5-1.5L22 18.586l-1.5 1.5 1.5 1.5L20.586 23l-1.5-1.5-1.5 1.5-1.414-1.414 1.5-1.5-1.5-1.5zM3.414 17.172l1.5 1.5 1.5-1.5 1.414 1.414-1.5 1.5 1.5 1.5L6.414 23l-1.5-1.5-1.5 1.5L2 21.586l1.5-1.5-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoginMethod;
