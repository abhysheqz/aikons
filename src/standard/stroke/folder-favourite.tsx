import React from "react";
const FolderFavourite: React.FC<
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
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V11m-9.982-4.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h8M20.586 13.331c-1.796-.951-3.086.451-3.086.451s-1.29-1.402-3.086-.451C12.238 14.483 12.082 18.996 17.5 21c5.418-2.004 5.262-6.517 3.086-7.669"
      />
    </svg>
  );
};
export default FolderFavourite;
