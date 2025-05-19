import React from "react";
const Apricot: React.FC<
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
        d="M13.48 4.1c-.35.647-.48 1.47-.48 2.025a1 1 0 1 1-2 0c0-.779.17-1.955.72-2.975.574-1.064 1.618-2.025 3.28-2.025a1 1 0 1 1 0 2c-.738 0-1.194.372-1.52.975"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 5.375c-4.142 0-7.25 4.07-7.25 8.75s3.108 8.75 7.25 8.75c.88 0 1.723-.19 2.5-.532a6.15 6.15 0 0 0 2.5.532c4.143 0 7.25-4.07 7.25-8.75s-3.107-8.75-7.25-8.75c-.887 0-1.73.188-2.508.529A6.2 6.2 0 0 0 9.5 5.375m1.43 3.408a1 1 0 0 0-1.457-1.37c-1.345 1.43-2.245 3.409-2.468 5.61a1 1 0 1 0 1.99.202c.182-1.793.91-3.353 1.935-4.442"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Apricot;
