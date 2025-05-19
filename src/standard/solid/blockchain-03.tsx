import React from "react";
const Blockchain_03: React.FC<
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
        d="M11.4 4.587a.75.75 0 0 1 .7 0l6 3.176c.246.13.4.385.4.663v6.824a.75.75 0 0 1-.415.67l-6 3a.75.75 0 0 1-.713-.022l-6-3.5A.75.75 0 0 1 5 14.75V8.426a.75.75 0 0 1 .4-.663zM6.5 9.608l4.5 2.118v5.218L6.5 14.32zm6 7.429 4.5-2.25V9.608l-4.5 2.118z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.415 1.08a.75.75 0 0 1 .67 0l9 4.5a.75.75 0 0 1 .415.67v11a.75.75 0 0 1-.415.67l-9 4.5a.75.75 0 0 1-.67 0l-9-4.5A.75.75 0 0 1 2 17.25v-11a.75.75 0 0 1 .415-.67zM3.5 6.713v10.073l8.25 4.125L20 16.787V6.714l-8.25-4.125z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_03;
