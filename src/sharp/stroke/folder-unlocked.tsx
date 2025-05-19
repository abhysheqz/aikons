import React from "react";
const FolderUnlocked: React.FC<
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
        strokeWidth={1.5}
        d="M16.75 16v-1.25a1.75 1.75 0 0 1 2.975-1.25M15 16v5h7v-5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H22v3.003m-9.982-3.003L9 3H2v18h9"
      />
    </svg>
  );
};
export default FolderUnlocked;
