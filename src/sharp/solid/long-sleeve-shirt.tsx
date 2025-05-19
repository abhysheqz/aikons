import React from "react";
const LongSleeveShirt: React.FC<
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
        d="M7.98 1.639 3.19 3.816a.75.75 0 0 0-.414.486l-1.5 5.5a.8.8 0 0 0-.02.29l1 8A.75.75 0 0 0 3 18.75h1.694l1.04-8.654-.947-2.86 1.424-.472 1 3.02a.75.75 0 0 1 .032.325l-1.35 11.238c.73.484 1.626.82 2.57 1.04 1.111.26 2.337.374 3.538.365 1.2.009 2.427-.105 3.538-.365.942-.22 1.837-.554 2.566-1.036l-1.351-11.242a.75.75 0 0 1 .033-.326l1-3.019 1.424.472-.948 2.86 1.04 8.654H21a.75.75 0 0 0 .744-.657l1-8a.8.8 0 0 0-.02-.29l-1.5-5.5a.75.75 0 0 0-.414-.486l-4.792-2.178-2.056 4.111h-3.927z"
      />
      <path fill="currentColor" d="M14.535 1.249H9.463l1.5 3h2.072z" />
    </svg>
  );
};
export default LongSleeveShirt;
