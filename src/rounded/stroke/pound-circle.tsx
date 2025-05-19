import React from "react";
const PoundCircle: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.07 10.234c-.041-.58-.348-1.985-1.528-2.504-1.475-.649-3.416.168-3.598 2.271-.085.987.393 2.022 1.087 2.533.639.47 1.607.446 2.511.446H8.526m3.03 0c-.17.69-1.103 2.672-2.59 3.499h5.411c.21 0 .8.054 1.636-.546"
      />
    </svg>
  );
};
export default PoundCircle;
