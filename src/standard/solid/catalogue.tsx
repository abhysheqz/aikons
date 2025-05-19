import React from "react";
const Catalogue: React.FC<
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
        d="M4.5 6.75A2.75 2.75 0 0 0 1.75 9.5v10a2.75 2.75 0 0 0 2.75 2.75h8a2.75 2.75 0 0 0 2.75-2.75v-12a.75.75 0 0 0-.75-.75zm1 5a.75.75 0 0 0 0 1.5H9a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.5 17.25h3a2.75 2.75 0 0 0 2.75-2.75v-10a2.75 2.75 0 0 0-2.75-2.75h-7.922l4.336 4.336a2 2 0 0 1 .585 1.467z"
      />
      <path fill="currentColor" d="M10.03 1.97a.75.75 0 0 0-1.28.53v3h4.81z" />
    </svg>
  );
};
export default Catalogue;
