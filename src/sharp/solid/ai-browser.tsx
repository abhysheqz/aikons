import React from "react";
const AiBrowser: React.FC<
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
        d="M18.299 15.25H19.7l.258.695c.36.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V19.7l-.695.258c-.976.36-1.24.476-1.43.666s-.305.454-.666 1.43l-.258.695H18.3l-.258-.695c-.36-.976-.476-1.24-.666-1.43s-.454-.305-1.43-.666l-.695-.258V18.3l.695-.258c.976-.36 1.24-.476 1.43-.666s.305-.454.666-1.43z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 1.25H1.25v20.5H13.5v-1.952H3.202V9.75h16.596v3.75h1.952zM5.5 4.5h2.009v2H5.5zm6.009 0H9.5v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrowser;
