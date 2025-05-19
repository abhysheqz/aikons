import React from "react";
const CoPresent: React.FC<
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
        d="M1.25 3.22c0-.535.438-.97.977-.97h19.546c.54 0 .977.435.977.97v14.56c0 .535-.437.97-.977.97H18.84v-1.941h1.954V4.19H3.206V16.81h1.954v1.941H2.227a.974.974 0 0 1-.977-.97z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 11a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M6.25 21a5.75 5.75 0 0 1 11.5 0v.75H6.25z"
      />
    </svg>
  );
};
export default CoPresent;
