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
        d="M6.25 3.5A.75.75 0 0 1 7 2.75h15a.75.75 0 0 1 .75.75V18a3.25 3.25 0 0 1-3.25 3.25h-15A3.25 3.25 0 0 1 1.25 18V6.75h5zm0 4.75h-3.5V18a1.75 1.75 0 1 0 3.5 0zm3.75.5h9v-1.5h-9zm0 4h3v-1.5h-3zm6 0h3v-1.5h-3zm-6 4h3v-1.5h-3zm6 0h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default News_01;
