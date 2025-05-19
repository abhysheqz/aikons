import React from "react";
const FolderShared_02: React.FC<
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
        d="m19.753 14.136-3.733 1.828a1.5 1.5 0 1 0 .104 2.502l3.627 1.869a1.5 1.5 0 1 0 .675-1.34l-3.502-1.803 3.478-1.704a1.5 1.5 0 1 0-.65-1.352"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h17.694a2.7 2.7 0 0 1-.284-.571l-2.555-1.316a2.75 2.75 0 1 1-.134-5.266l2.708-1.327a2.75 2.75 0 0 1 4.07-1.325v-5.7H12.392z"
      />
    </svg>
  );
};
export default FolderShared_02;
