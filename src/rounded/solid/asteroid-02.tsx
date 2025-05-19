import React from "react";
const Asteroid_02: React.FC<
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
        d="M18.583 2.904a.97.97 0 0 0 0-1.37.97.97 0 0 0-1.372 0l-1.456 1.453a.967.967 0 0 0 0 1.37.97.97 0 0 0 1.373 0zm-3.397 3.39a.97.97 0 0 0 0-1.37.97.97 0 0 0-1.372 0L12.075 6.66a8.25 8.25 0 1 0 1.86.883zm-1.25 1.249a8.2 8.2 0 0 0-1.861-.883l-5.54 5.53a.967.967 0 0 0 0 1.37.97.97 0 0 0 1.372 0zm8.53-.764a.967.967 0 0 0 0-1.37.97.97 0 0 0-1.373 0l-2.912 2.906a.967.967 0 0 0 0 1.37.97.97 0 0 0 1.373 0zM14.7 13.56a.967.967 0 0 0 0-1.37.97.97 0 0 0-1.373 0l-2.911 2.906a.97.97 0 0 0 0 1.37.97.97 0 0 0 1.372 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asteroid_02;
