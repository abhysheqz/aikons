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
        d="M18.799 3.05a2.73 2.73 0 0 0-3.862 0l-1.413 1.413 6.013 6.013 1.413-1.413a2.73 2.73 0 0 0 0-3.862zM18.476 11.537l-6.013-6.013-8.105 8.105a4.7 4.7 0 0 0-1.316 2.557l-.782 4.69a.75.75 0 0 0 .863.864l4.691-.782a4.7 4.7 0 0 0 2.557-1.316z"
      />
    </svg>
  );
};
export default Edit_03;
