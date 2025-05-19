import React from "react";
const AiEraser: React.FC<
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
        d="M16.607 4.535a.977.977 0 0 0-1.38 0L2.535 17.193a.97.97 0 0 0 0 1.377l3.905 3.895a.98.98 0 0 0 .69.285h3.905a.98.98 0 0 0 .69-.285l10.738-10.71a.97.97 0 0 0 0-1.378zM7.536 20.803l-2.929-2.92 5.645-5.631 4.47 4.47-4.09 4.081z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.299 1.25H5.7l.258.695c.36.976.476 1.24.665 1.43s.455.305 1.43.666l.696.258V5.7l-.695.258c-.976.36-1.24.476-1.43.665s-.305.455-.666 1.43L5.7 8.75H4.3l-.258-.695c-.36-.976-.476-1.24-.665-1.43s-.455-.305-1.43-.666L1.25 5.7V4.3l.695-.258c.976-.36 1.24-.476 1.43-.665s.305-.455.666-1.43z"
      />
    </svg>
  );
};
export default AiEraser;
