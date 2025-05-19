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
        d="M8 4.5a3.5 3.5 0 1 0 0 7h1.5v-7zm3.5 0v17h-2v-8H8a5.5 5.5 0 1 1 0-11h13.5v2h-5v17h-2v-17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Paragraph;
