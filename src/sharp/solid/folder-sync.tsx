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
        fill="currentColor"
        d="M17.34 14.75c-1.393 0-2.567 1.034-2.757 2.356l-.092.644h-1.736l-.824-3.296 1.456-.364.298 1.194a4.31 4.31 0 0 1 3.656-2.034c1.445 0 2.72.722 3.488 1.82l.429.616-1.66.243a2.75 2.75 0 0 0-2.257-1.179M22.75 20.546l-1.455.364-.298-1.194a4.31 4.31 0 0 1-3.656 2.034 4.25 4.25 0 0 1-3.488-1.82l-.43-.616 1.66-.243a2.75 2.75 0 0 0 2.258 1.179c1.394 0 2.568-1.033 2.757-2.356l.093-.644h1.735z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h11.495l-2.33-8.205 3.881-.97S16.253 12 17.341 12c1.871 0 3.523.936 4.513 2.356l.896 1.284V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderSync;
