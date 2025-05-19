import React from "react";
const NewTwitterRectangle: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM5.94 17 7 18.06l4.101-4.1 2.738 3.79h4.628l-4.679-6.478L18.061 7 17 5.94l-4.101 4.1-2.738-3.79H5.533l4.679 6.478z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewTwitterRectangle;
