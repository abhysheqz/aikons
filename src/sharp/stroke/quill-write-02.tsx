import React from "react";
const QuillWrite_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.462 3.501H2.5v18.02h17.902v-8.008"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.469 17.517c0-5.613 5.263-8.233 5.263-8.233"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.324 4.692c2.552-1.834 5.557-2.168 7.176-2.168 0 .622-.118 2.027-.741 3.32-.62 1.286-1.82 1.945-2.995 1.952a.007.007 0 0 0-.005.012l1.464 1.493a.01.01 0 0 1 0 .011c-2.322 2.272-2.984 2.517-4.308 3.24-1.02.558-3.883 1.32-4.584 1.32-.32 0 .05-2.52.312-3.762.413-1.971 2.087-4.273 3.68-5.418Z"
      />
    </svg>
  );
};
export default QuillWrite_02;
