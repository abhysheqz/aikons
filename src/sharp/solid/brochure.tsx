import React from "react";
const Brochure: React.FC<
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
        d="M17.75 6.217c0-.534.407-.967.91-.967h3.18c.503 0 .91.433.91.967v12.566c0 .534-.407.967-.91.967h-3.18c-.503 0-.91-.433-.91-.967s.407-.966.91-.966h2.272V7.183h-2.273c-.502 0-.909-.432-.909-.966M1.25 6.217c0-.534.407-.967.91-.967h3.18c.503 0 .91.433.91.967s-.407.966-.91.966H3.069v10.634h2.273c.502 0 .909.433.909.966 0 .534-.407.967-.91.967H2.16c-.503 0-.91-.433-.91-.967z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.5 5H9v1.5h6zm0 4H9v1.5h6zm0 4H9v1.5h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Brochure;
