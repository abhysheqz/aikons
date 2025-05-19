import React from "react";
const Structure_05: React.FC<
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
        d="M3 1.25A1.75 1.75 0 0 0 1.25 3v4c0 .966.784 1.75 1.75 1.75h6c.395 0 .76-.13 1.052-.351l2.482 7.645c-.18.274-.284.603-.284.956v4c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 21.75 21v-4A1.75 1.75 0 0 0 20 15.25h-5.62l-2.77-8.529 2.64 1.056V11c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 22.75 11V7A1.75 1.75 0 0 0 21 5.25h-5c-.507 0-.963.215-1.283.56L10.75 4.223V3A1.75 1.75 0 0 0 9 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_05;
