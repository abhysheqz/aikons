import React from "react";
const SquareLockRemove_01: React.FC<
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
        d="m16.629 18.543-2.793-2.793 1.414-1.414 2.793 2.793 2.793-2.793 1.414 1.414-2.793 2.793 2.793 2.793-1.414 1.414-2.793-2.793-2.793 2.793-1.414-1.414zM10.5 3.25A3.5 3.5 0 0 0 7 6.75v2.5H5v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.25 8.25H1.75v14.5h11.379l-1.414-1.414 2.793-2.793-2.793-2.793 3.535-3.535 2.793 2.793L19.25 13.8z"
      />
    </svg>
  );
};
export default SquareLockRemove_01;
