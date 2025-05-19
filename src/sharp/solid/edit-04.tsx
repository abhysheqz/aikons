import React from "react";
const Edit_04: React.FC<
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
        d="M11 19.75h8v2h-8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m21.75 7.313-5.06-5.061L14 4.94l5.061 5.061zM18 11.062 12.94 6 2.25 16.691v5.061h5.06z"
      />
    </svg>
  );
};
export default Edit_04;
