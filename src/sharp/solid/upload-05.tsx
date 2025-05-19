import React from "react";
const Upload_05: React.FC<
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
        d="m12 3.75 3.707 3.707-1.414 1.415L13 7.579v7.585h-2V7.58L9.707 8.872 8.293 7.457zM19 20.25H5v-2h14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_05;
