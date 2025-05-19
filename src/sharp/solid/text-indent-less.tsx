import React from "react";
const TextIndentLess: React.FC<
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
        d="M8.5 5.5h-5v-2h5zM8.5 10.5h-3v-2h3zM8.5 15.5h-5v-2h5zM8.5 20.5h-3v-2h3zM11.5 21V3h2v18zM19.086 7.793 20.5 9.207 17.707 12l2.793 2.793-1.414 1.414L14.879 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextIndentLess;
