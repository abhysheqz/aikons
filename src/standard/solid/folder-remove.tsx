import React from "react";
const FolderRemove: React.FC<
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
        d="m9.898 2.945 2.493 3.3H20a2.75 2.75 0 0 1 2.75 2.75v3.739a2.25 2.25 0 0 0-2.591.425l-1.409 1.409-1.409-1.409a2.25 2.25 0 1 0-3.182 3.182l1.409 1.409-1.409 1.409a2.25 2.25 0 0 0-.425 2.591H4A2.75 2.75 0 0 1 1.25 19V4c0-.966.784-1.75 1.75-1.75h5.502a1.75 1.75 0 0 1 1.396.695m6.56 11.098a1 1 0 0 0-1.415 1.414l2.293 2.293-2.293 2.293a1 1 0 0 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414l-2.293-2.293 2.293-2.293a1 1 0 0 0-1.414-1.414l-2.293 2.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FolderRemove;
