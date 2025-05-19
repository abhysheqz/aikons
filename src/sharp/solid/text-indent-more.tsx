import React from "react";
const TextIndentMore: React.FC<
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
        d="M20.5 5.5h-5v-2h5zM18.5 10.5h-3v-2h3zM20.5 15.5h-5v-2h5zM18.5 20.5h-3v-2h3zM10.5 21V3h2v18zM6.293 12 3.5 9.207l1.414-1.414L9.121 12l-4.207 4.207L3.5 14.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextIndentMore;
