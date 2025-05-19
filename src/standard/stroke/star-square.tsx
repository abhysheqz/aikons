import React from "react";
const StarSquare: React.FC<
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
        d="M19.5 2.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.48 7.303c.216-.404.824-.404 1.04 0l1.28 2.382a.58.58 0 0 0 .428.296l2.779.42c.47.072.659.62.322.94l-1.99 1.895a.54.54 0 0 0-.163.478l.438 2.644c.075.447-.417.786-.842.58l-2.507-1.212a.61.61 0 0 0-.53 0l-2.507 1.212c-.425.206-.917-.133-.842-.58l.438-2.644a.54.54 0 0 0-.163-.478L6.67 11.34c-.337-.32-.149-.868.322-.94l2.779-.42a.58.58 0 0 0 .429-.296z"
      />
    </svg>
  );
};
export default StarSquare;
