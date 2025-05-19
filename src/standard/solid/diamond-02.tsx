import React from "react";
const Diamond_02: React.FC<
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
        d="M6.077 3c-.526 0-1.035.228-1.377.635l-3.3 3.93a1.69 1.69 0 0 0-.02 2.161l8.972 11.113a1.81 1.81 0 0 0 2.796 0L22.12 9.726a1.69 1.69 0 0 0-.02-2.162l-3.3-3.929A1.8 1.8 0 0 0 17.423 3zM9.75 8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Diamond_02;
