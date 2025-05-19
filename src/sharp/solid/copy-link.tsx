import React from "react";
const CopyLink: React.FC<
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
        d="M19.261 4.739a1.67 1.67 0 0 0-2.36 0l-1.414-1.414a3.669 3.669 0 1 1 5.188 5.188l-2.359 2.36a3.67 3.67 0 0 1-4.988.186l1.306-1.515a1.67 1.67 0 0 0 2.268-.086l2.36-2.359a1.67 1.67 0 0 0 0-2.36"
      />
      <path
        fill="currentColor"
        d="M15.866 7.956a1.67 1.67 0 0 0-2.268.086l-2.36 2.359a1.669 1.669 0 1 0 2.361 2.36l1.414 1.414a3.67 3.67 0 0 1-5.188-5.188l2.359-2.36a3.67 3.67 0 0 1 4.988-.186z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 2.25h9.263V4.2H4.2v15.6h15.6v-7.312h1.95v9.262H2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CopyLink;
