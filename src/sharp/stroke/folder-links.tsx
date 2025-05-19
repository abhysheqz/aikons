import React from "react";
const FolderLinks: React.FC<
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
        d="M8 6.994h4.018m0 0H22v7.003m-9.982-7.003L9 3H2v18h11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.686 20.432a1.941 1.941 0 0 0 2.746-2.746l-1.716-1.716a1.94 1.94 0 0 0-2.639-.098m.237-2.303a1.941 1.941 0 0 0-2.745 2.745l1.715 1.715a1.94 1.94 0 0 0 2.64.1"
      />
    </svg>
  );
};
export default FolderLinks;
