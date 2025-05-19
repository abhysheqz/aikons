import React from "react";
const SearchVisual: React.FC<
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
        d="M6.5 11.5a5.5 5.5 0 1 1 10.032 3.118L18.914 17 17.5 18.414l-2.383-2.382A5.5 5.5 0 0 1 6.5 11.5M12 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 1.75h8.298v1.953H3.702v6.345H1.75zm12.202 0h8.298v8.298h-1.952V3.703h-6.346zM3.702 13.953v6.345h6.346v1.952H1.75v-8.297zm18.548 0v8.297h-8.298v-1.952h6.346v-6.345z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchVisual;
