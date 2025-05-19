import React from "react";
const Blender: React.FC<
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
        fillRule="evenodd"
        d="M3.227 3.616A1 1 0 0 1 4 3.25h4a1 1 0 0 1 0 2H5.22l.672 3.359 3.147 1.806a1 1 0 1 1-.996 1.734l-3.54-2.032a1 1 0 0 1-.484-.67l-1-5a1 1 0 0 1 .208-.831"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3.25a.75.75 0 0 0-.748.808l1 13A.75.75 0 0 0 9 17.75h8a.75.75 0 0 0 .748-.692l.947-12.308H20a.75.75 0 0 0 0-1.5zm8.998 4H15.5a.75.75 0 0 0 0 1.5h1.382zm-.23 3H15.5a.75.75 0 0 0 0 1.5h1.152zm-1.268 3h1.036l-.115 1.5H15.5a.75.75 0 0 1 0-1.5M10.75 2a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.072 16.629A1 1 0 0 1 9 16h8a1 1 0 0 1 .928.629l2 5A1 1 0 0 1 19 23H7a1 1 0 0 1-.928-1.371zM9.677 18l-1.2 3h9.046l-1.2-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blender;
