import React from "react";
const Folder_01: React.FC<
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
        d="m9.898 2.945 2.493 3.3H20a2.75 2.75 0 0 1 2.75 2.75V19A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V4c0-.966.784-1.75 1.75-1.75h5.502a1.75 1.75 0 0 1 1.396.695"
      />
    </svg>
  );
};
export default Folder_01;
