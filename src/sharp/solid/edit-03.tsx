import React from "react";
const Edit_03: React.FC<
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
        d="M22 8.069 15.93 2l-2.935 2.935 6.069 6.07zM18.004 12.065l-6.069-6.07-8.721 8.722L2 22l7.282-1.214z"
      />
    </svg>
  );
};
export default Edit_03;
