import React from "react";
const AiBook: React.FC<
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
        d="M2.75 5A3.75 3.75 0 0 1 6.5 1.25h14.75v16.5h-2v3.5h2v1.5H6a3.25 3.25 0 0 1-3.25-3.25zm1.5 14.5c0 .966.784 1.75 1.75 1.75h11.75v-3.5H6a1.75 1.75 0 0 0-1.75 1.75m6.623-13.75H9.268l-2.737 7.184 1.402.534.769-2.018h2.737l.77 2.018 1.4-.534zm-.005 4.2H9.273l.797-2.093zm5.381 3.3v-7.5h-1.5v7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBook;
