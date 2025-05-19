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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.996 14a2.5 2.5 0 1 1 3.913 2.064c-.683.468-1.41 1.108-1.409 1.936m0 2.5v.5M8 6.994h4.018m0 0H20c1.105 0 2 .901 2 2.006v0m-9.982-2.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h12"
      />
    </svg>
  );
};
export default FolderUnknown;
