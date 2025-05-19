import React from "react";
const Edit_04: React.FC<
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
        d="M11 20.75a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.652 2.763a1.75 1.75 0 0 0-2.475 0L14.5 4.439 19.56 9.5l1.677-1.677a1.75 1.75 0 0 0 0-2.475zM18.5 10.56 13.44 5.5 2.762 16.177a1.75 1.75 0 0 0-.513 1.237V21c0 .414.336.75.75.75h3.586c.464 0 .91-.184 1.237-.513z"
      />
    </svg>
  );
};
export default Edit_04;
