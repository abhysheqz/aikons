import React from "react";
const AppleNews: React.FC<
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
        strokeWidth={1.5}
        d="M13.5 2.5h8v8zM10.501 21.5h-8v-8zM21.5 21.5v-6l-13-13h-6v6l13 13z"
      />
    </svg>
  );
};
export default AppleNews;
