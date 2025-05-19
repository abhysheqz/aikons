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
        d="M9.5 5.25c-4.142 0-7.25 4.07-7.25 8.75s3.108 8.75 7.25 8.75c.885 0 1.73-.2 2.504-.544.772.345 1.61.544 2.497.544 4.142 0 7.25-4.07 7.25-8.75s-3.108-8.75-7.25-8.75c-.877 0-1.717.187-2.494.527A6.2 6.2 0 0 0 9.5 5.25m1.244 3.615A1 1 0 1 0 9.228 7.56C8.02 8.964 7.215 10.833 7.005 12.9a1 1 0 1 0 1.99.201c.17-1.682.822-3.16 1.749-4.236"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.48 3.975C13.13 4.622 13 5.445 13 6a1 1 0 1 1-2 0c0-.779.17-1.955.72-2.975C12.294 1.96 13.338 1 15 1a1 1 0 1 1 0 2c-.738 0-1.194.372-1.52.975"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Apricot;
