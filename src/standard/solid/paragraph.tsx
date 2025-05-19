import React from "react";
const Paragraph: React.FC<
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
        d="M7.5 4a3.5 3.5 0 1 0 0 7H9V4zM11 4v17a1 1 0 1 1-2 0v-8H7.5a5.5 5.5 0 1 1 0-11H21a1 1 0 1 1 0 2h-5v17a1 1 0 1 1-2 0V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Paragraph;
