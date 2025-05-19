import React from "react";
const Tasbih: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.09 15-5.474 2.985a.1.1 0 0 0-.024.157l1.885 1.929M9.5 16.553l-2.994 5.333a.1.1 0 0 1-.157.022l-1.872-1.837m0 0 .98-1.035"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.157 6.767a1.714 1.714 0 1 1-2.425-2.424 1.714 1.714 0 0 1 2.425 2.424ZM11.267 15.658a1.714 1.714 0 1 1-2.424-2.425 1.714 1.714 0 0 1 2.424 2.425ZM17.732 15.658a1.715 1.715 0 1 1 2.425-2.425 1.715 1.715 0 0 1-2.425 2.425ZM8.843 6.767a1.714 1.714 0 1 1 2.424-2.424 1.714 1.714 0 0 1-2.424 2.424ZM20.786 11.714a1.714 1.714 0 1 1 0-3.429 1.714 1.714 0 0 1 0 3.429ZM8.214 11.715a1.714 1.714 0 1 1 0-3.429 1.714 1.714 0 0 1 0 3.429ZM12.785 16.286a1.714 1.714 0 1 1 3.43 0 1.714 1.714 0 0 1-3.43 0ZM12.785 3.714a1.714 1.714 0 1 1 3.429 0 1.714 1.714 0 0 1-3.429 0Z"
      />
    </svg>
  );
};
export default Tasbih;
