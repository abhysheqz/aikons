import React from "react";
const Folders: React.FC<
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
        d="M21 6.5h-6.073a2 2 0 0 1-1.63-.842L11.65 3.342a2 2 0 0 0-1.63-.842H3M8.684 9H12m0 0h7a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-13a1 1 0 0 1 1-1h5.1a1 1 0 0 1 .829.44z"
      />
    </svg>
  );
};
export default Folders;
