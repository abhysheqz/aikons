import React from "react";
const Archive_02: React.FC<
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
        d="M22.75 10.25H1.25v11.5h21.5zm-12.876 6-1.725-2.3-1.2.9 2.175 2.9h5.75l2.175-2.9-1.2-.9-1.725 2.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 6.25H3.25V9h17.5zM18.75 2.25H5.25V5h13.5z"
      />
    </svg>
  );
};
export default Archive_02;
