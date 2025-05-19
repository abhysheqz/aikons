import React from "react";
const ThirdBracketCircle: React.FC<
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
        d="M14 16c.924 0 1.673-.512 1.673-1.143 0-1.22.014-1.723 1.082-2.453.327-.223.327-.585 0-.808-1.068-.73-1.082-1.232-1.082-2.453C15.673 8.512 14.924 8 14 8m-4 8c-.924 0-1.673-.512-1.673-1.143 0-1.22-.014-1.723-1.082-2.453-.327-.223-.327-.585 0-.808 1.068-.73 1.082-1.232 1.082-2.453C8.327 8.512 9.076 8 10 8"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default ThirdBracketCircle;
