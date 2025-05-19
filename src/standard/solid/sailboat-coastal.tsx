import React from "react";
const SailboatCoastal: React.FC<
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
        d="M2.25 14a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75c0 1.445-.605 3.542-2.799 5.24l-.036.028c-.18.139-.377.293-.655.388-.28.095-.555.095-.807.094H6.547c-.252 0-.528.001-.807-.094-.278-.095-.476-.25-.655-.388l-.036-.029C2.855 17.543 2.25 15.446 2.25 14M14.095 1.006a.75.75 0 0 1 .576.409l4 8A.75.75 0 0 1 18 10.5H7a.75.75 0 0 1-.564-1.244l7-8a.75.75 0 0 1 .66-.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.37a1 1 0 0 1 1 1V14a1 1 0 1 1-2 0V2.37a1 1 0 0 1 1-1M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SailboatCoastal;
