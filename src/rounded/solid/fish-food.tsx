import React from "react";
const FishFood: React.FC<
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
        d="M14.752 4.282a.95.95 0 0 0-.231-.623 1.1 1.1 0 0 0-.437-.298c-.254-.097-.539-.114-.776-.11-.498.008-1.12.119-1.72.274a11.5 11.5 0 0 0-1.774.61 5.5 5.5 0 0 0-.735.391c-.202.132-.433.31-.59.543l-.018.03a.07.07 0 0 0 .067.104 10.84 10.84 0 0 1 5.253.714c.282.115.424.172.543.114.12-.059.158-.187.233-.445.12-.417.185-.854.185-1.304"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.696 16.925a8.98 8.98 0 0 0 3.93-3.487c.246.29.53.605.832.906.35.348.743.696 1.148.962.386.254.874.494 1.394.494a.75.75 0 0 0 .641-1.14c-.446-.735-.452-1.77-.178-2.823.276-1.056.776-1.906 1.064-2.192A.75.75 0 0 0 22 8.362c-1.444 0-2.652.692-3.508 1.413-.346.291-.648.599-.9.89C13.817 4.609 4.406 4.977 1.317 11.77a.75.75 0 0 0 0 .621c1.273 2.798 3.627 4.51 6.209 5.127l.943 1.548.018.029c.401.595 1.038 1.002 1.906 1.261.858.256 1.996.385 3.486.392a.867.867 0 0 0 .871-.866c0-1.104-.388-2.14-1.054-2.957M6.012 13.25c.688 0 1.246-.56 1.246-1.25s-.558-1.25-1.246-1.25h-.009c-.688 0-1.245.56-1.245 1.25s.557 1.25 1.245 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FishFood;
