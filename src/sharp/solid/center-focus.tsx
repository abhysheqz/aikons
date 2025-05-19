import React from "react";
const CenterFocus: React.FC<
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
        d="M22.25 1.75v6.345h-1.953V3.703H14.93V1.75zm-13.179 0v1.953H3.702v4.392H1.75V1.75zm-7.32 14.155h1.953v4.393H9.07v1.952h-7.32zm18.547 4.393v-4.393h1.952v6.345h-7.321v-1.952z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
    </svg>
  );
};
export default CenterFocus;
