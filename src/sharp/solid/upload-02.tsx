import React from "react";
const Upload_02: React.FC<
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
        d="m22 14.697-3.276 6.553H5.276L2 14.697l1.789-.894 2.723 5.447h10.976l2.723-5.447z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 2.75 3.707 3.707-1.414 1.415L13 6.579v7.585h-2V6.58L9.707 7.872 8.293 6.457z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_02;
