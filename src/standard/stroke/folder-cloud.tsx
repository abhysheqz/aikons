import React from "react";
const FolderCloud: React.FC<
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
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V13m-9.982-6.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h6M13 18.667C13 19.955 14.007 21 15.25 21h4.725C21.093 21 22 20.06 22 18.9s-.917-2.1-2.035-2.1c.125-1.436-.985-2.8-2.465-2.8-1.294 0-2.357 1.03-2.466 2.344-1.141.113-2.034 1.11-2.034 2.323"
      />
    </svg>
  );
};
export default FolderCloud;
