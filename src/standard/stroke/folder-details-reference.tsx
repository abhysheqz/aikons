import React from "react";
const FolderDetailsReference: React.FC<
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
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V12m-9.982-5.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v17M22 15h-7m7 3h-7m2.5 3H15M6 15h5m0 0v5m0-5-6 6"
      />
    </svg>
  );
};
export default FolderDetailsReference;
