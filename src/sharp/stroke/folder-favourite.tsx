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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H22v3.003m-9.982-3.003L9 3H2v18h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.586 13.331c-1.796-.951-3.086.451-3.086.451s-1.29-1.402-3.086-.451C12.238 14.483 12.082 18.996 17.5 21c5.418-2.004 5.262-6.517 3.086-7.669Z"
      />
    </svg>
  );
};
export default FolderFavourite;
