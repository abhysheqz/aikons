import React from "react";
const DocumentValidation: React.FC<
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
        d="M11.934 1A7.5 7.5 0 0 0 21.5 12.554v7.196a2.75 2.75 0 0 1-2.75 2.75h-14A2.75 2.75 0 0 1 2 19.75v-16A2.75 2.75 0 0 1 4.75 1zm-5.97 10.75a1 1 0 1 0 0 2h3.24a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h7.156a1 1 0 0 1 0 2H5.964a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 6.75a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0m8.23-2.076a.75.75 0 0 1 .096 1.056l-2.5 3a.75.75 0 0 1-1.106.05l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.92.919 1.974-2.37a.75.75 0 0 1 1.056-.095"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DocumentValidation;
