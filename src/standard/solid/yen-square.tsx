import React from "react";
const YenSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.07 5.262a.75.75 0 0 0-1.14.976l2.82 3.29v.972H9.5a.75.75 0 0 0 0 1.5h1.75v2.75a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-.973l2.82-3.289a.75.75 0 0 0-1.14-.976L12 9.848z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenSquare;
