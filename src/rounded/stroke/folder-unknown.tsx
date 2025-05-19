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
        d="M15.996 14a2.5 2.5 0 1 1 3.913 2.064c-.683.468-1.41 1.108-1.409 1.936m0 2.5v.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.024 21h-3.002c-4.724 0-7.087 0-8.554-1.465C2 18.072 2 15.715 2 11V7.944c0-1.816 0-2.724.381-3.406a3 3 0 0 1 1.16-1.158C4.224 3 5.135 3 6.955 3c1.167 0 1.75 0 2.26.191 1.166.436 1.646 1.493 2.172 2.542L12.022 7M8.013 7h8.77c2.111 0 3.167 0 3.925.506.328.218.61.5.83.827.281.42.406.933.462 1.667"
      />
    </svg>
  );
};
export default FolderUnknown;
