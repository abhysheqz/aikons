import React from "react";
const AppStore: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm11.13 4.668-4.038 6.348h2.406v1.5H9.137l-2.006 3.152-1.266-.805 1.494-2.347h-.861v-1.5h1.816l2.862-4.498-1.29-1.819 1.224-.867.935 1.32.82-1.289zm-1.366 4.498 4.1 6.5 1.269-.8-1.482-2.35h.847v-1.5h-1.794l-1.671-2.65z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppStore;
