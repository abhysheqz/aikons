import React from "react";
const LanguageSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm7.75 5.25a.75.75 0 0 0-1.5 0V8H7.25a.75.75 0 0 0 0 1.5h6.494c-.367.954-1.018 2.088-1.842 3.234-.44-.636-.786-1.258-.94-1.721a.75.75 0 0 0-1.424.474c.253.758.805 1.672 1.407 2.488-.867 1.05-1.803 2.001-2.664 2.69a.75.75 0 0 0 .938 1.17c.888-.71 1.825-1.65 2.695-2.68q.208.229.414.428c.35.344.73.66 1.087.838a.75.75 0 1 0 .67-1.342c-.143-.072-.389-.256-.71-.569a10 10 0 0 1-.514-.546l.248-.338c.984-1.368 1.827-2.842 2.222-4.126h1.919a.75.75 0 0 0 0-1.5H12.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LanguageSquare;
