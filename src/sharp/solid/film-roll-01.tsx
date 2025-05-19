import React from "react";
const FilmRoll_01: React.FC<
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
        d="M4.75 3.75A.75.75 0 0 0 4 4.5v16.25H2.75v2h13v-2H14.5V4.5a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25H6.5V3.5H2.75v2h13v-2H12zM10.5 3.5v-.75H8v.75zM19.25 8.67h-6V6.75h7c.552 0 1 .43 1 .96v5.28a.95.95 0 0 1-.445.799l-2.555 1.635v2.366c0 .53-.448.96-1 .96h-4v-1.92h3v-1.92a.95.95 0 0 1 .445-.799l2.555-1.635z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilmRoll_01;
