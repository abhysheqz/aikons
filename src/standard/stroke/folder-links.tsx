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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V14m-9.982-7.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.686 20.432a1.941 1.941 0 0 0 2.746-2.746l-1.716-1.716a1.94 1.94 0 0 0-2.639-.098m.237-2.303a1.941 1.941 0 0 0-2.745 2.745l1.715 1.715a1.94 1.94 0 0 0 2.64.1"
      />
    </svg>
  );
};
export default FolderLinks;
