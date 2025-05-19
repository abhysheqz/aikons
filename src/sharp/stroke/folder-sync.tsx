import React from "react";
const FolderSync: React.FC<
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
        d="M8 6.994h4.018m0 0H22v5.003m-9.982-5.003L9 3H2v18h9M13 15l.5 2h.5c.243-1.696 1.737-3 3.5-3 1.19 0 2.24.593 2.873 1.5M22 20l-.5-2H21c-.243 1.696-1.737 3-3.5 3-1.19 0-2.24-.593-2.873-1.5"
      />
    </svg>
  );
};
export default FolderSync;
