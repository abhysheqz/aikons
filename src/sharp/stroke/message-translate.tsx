import React from "react";
const MessageTranslate: React.FC<
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
        d="M7.946 9.203h3.964m0 0h2.549m-2.549 0V7.472m3.965 1.731h-1.416m0 0c-.465 1.688-1.438 3.284-2.549 4.687m0 0c-.92 1.16-1.934 2.19-2.832 3.028m2.832-3.028c-.566-.675-1.36-1.766-1.586-2.26m1.586 2.26 1.7 1.794"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.796 2.532c-6.625.395-10.37 8.675-6.166 14.84L2.001 21.3a.1.1 0 0 0 .125.132l4.325-1.53c2.103 1.383 8.448 1.507 10.891 0 3.032-1.668 5.543-4.722 4.096-11.689-.679-1.919-3.03-5.288-7.712-5.776z"
      />
    </svg>
  );
};
export default MessageTranslate;
