import React from "react";
const ImportantBook: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 6H2m2.5 6H2m2.5 6H2"
      />
      <path
        fill="currentColor"
        d="m11.13 16.4-.361.658zm2.37-3.15a.75.75 0 0 0 0 1.5zm.009 1.5a.75.75 0 0 0 0-1.5zM12.75 12a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zm3.5 2a4.25 4.25 0 0 1-4.25 4.25v1.5A5.75 5.75 0 0 0 19.25 12zm-8.5 0a4.25 4.25 0 0 1 4.25-4.25v-1.5A5.75 5.75 0 0 0 7.75 12zm4.25-4.25A4.25 4.25 0 0 1 17.75 12h1.5a5.75 5.75 0 0 0-5.75-5.75zm0 8.5a4.24 4.24 0 0 1-2.01-.507l-.721 1.315c.984.54 1.988.692 2.731.692zm-2.01-.507c-1.25-.687-2.24-2.316-2.24-3.743h-1.5c0 1.99 1.302 4.116 3.019 5.058zm2.01-.993h.009v-1.5H13.5zm.75-2.75v-2h-1.5v2z"
      />
    </svg>
  );
};
export default ImportantBook;
