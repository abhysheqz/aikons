import React from "react";
const FolderUnknown: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.996 14a2.5 2.5 0 1 1 3.913 2.064c-.683.468-1.41 1.108-1.409 1.936m0 2.5v.5M8 6.994h4.018m0 0H22v2.003m-9.982-2.003L9 3H2v18h13"
      />
    </svg>
  );
};
export default FolderUnknown;
