import React from "react";
const Bookshelf_02: React.FC<
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
        d="M4 22.25v-3h2v3zm14 0v-3h2v3zM10.429 5.129l2 5-1.857.742-2-5zm7.552.175 1 5-1.962.392-1-5zM8 5.5v5H6v-5zm7 0v5h-2v-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.775 1.75H3.225a.974.974 0 0 0-.975.974v16.552c0 .538.437.974.975.974h17.55a.974.974 0 0 0 .975-.974V2.724a.973.973 0 0 0-.975-.974m-16.576 8V3.697h15.6V9.75zM10 17.5h4v-2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookshelf_02;
