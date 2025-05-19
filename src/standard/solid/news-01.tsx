import React from "react";
const News_01: React.FC<
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
        d="M6.18 21.75h14.57a2 2 0 0 0 2-2V4.25a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2V19.5c0 .857-.309 1.642-.82 2.25M1.25 8A.75.75 0 0 1 2 7.25h3a.75.75 0 0 1 .75.75v11.5a2.25 2.25 0 0 1-4.5 0zm9.126.75h9a.75.75 0 1 0 0-1.5h-9a.75.75 0 0 0 0 1.5m0 2.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-6.5 4a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default News_01;
