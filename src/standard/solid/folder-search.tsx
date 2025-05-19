import React from "react";
const FolderSearch: React.FC<
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
        d="m9.898 2.945 2.493 3.3H20a2.75 2.75 0 0 1 2.75 2.75v6.08A5.68 5.68 0 0 0 11.5 16.18a5.68 5.68 0 0 0 4.575 5.571H4A2.75 2.75 0 0 1 1.25 19V4c0-.966.784-1.75 1.75-1.75h5.502a1.75 1.75 0 0 1 1.396.695m7.28 8.805a4.429 4.429 0 1 0 2.344 8.187l1.52 1.52a1 1 0 0 0 1.415-1.414l-1.52-1.52a4.429 4.429 0 0 0-3.758-6.772m-2.428 4.429a2.429 2.429 0 1 1 4.372 1.456q-.105.14-.226.26a2.429 2.429 0 0 1-4.146-1.717"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FolderSearch;
