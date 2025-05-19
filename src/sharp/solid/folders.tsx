import React from "react";
const Folders: React.FC<
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
        d="M2.25 1.75h9.33l2.77 3.667h7.4V7.25h-8.406l-2.771-3.667H2.25z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M2.25 4.75h7.78l2.368 3.5h9.352v14H2.25z" />
    </svg>
  );
};
export default Folders;
