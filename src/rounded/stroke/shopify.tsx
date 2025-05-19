import React from "react";
const Shopify: React.FC<
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
        d="M16 23V4L4 7.5l-1 13zM17.5 5.148 16 4v19l5-1.5c0-2.663-.2-5.322-.599-7.955L19.13 5.148z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.002 4.875c.007-2.017-.763-3.612-2-3.846C9.441.734 7.727 2.72 7.174 5.465q-.118.591-.154 1.155"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.867 4.33c-.294-1.181-.914-2.017-1.758-2.182-1.383-.27-2.89 1.359-3.554 3.732M12.79 9.424c-1-.42-3.6-1.178-4.286.842-.37 1.09.294 2.252 1.713 3.367 1.987 1.56 1.65 2.891 1.286 3.367-1.285 1.684-3.857.702-4.714 0"
      />
    </svg>
  );
};
export default Shopify;
