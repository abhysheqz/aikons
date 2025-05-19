import React from "react";
const PizzaCutter: React.FC<
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
        d="M14.641 3.641a4.75 4.75 0 1 1 6.718 6.718 4.75 4.75 0 0 1-6.718-6.718"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.708 7.708a.997.997 0 0 1-1.41 0l-.006-.006a.997.997 0 1 1 1.41-1.41l.006.006c.39.39.39 1.02 0 1.41"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.585 9.316c.609.15 1.197.555 1.51 1.17.342.67.808 1.3 1.4 1.862.468.444.985.816 1.535 1.114.468.254.737.734.72 1.228a1.21 1.21 0 0 1-.972 1.147c-1.045.232-2.453.357-3.683-.124L8.484 18.19c.024.93-.338 1.86-1.073 2.557-1.409 1.337-3.678 1.337-5.087 0a3.373 3.373 0 0 1 0-4.936L8.68 9.779c.553-.525 1.29-.614 1.904-.463"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.586 8.032a.75.75 0 0 1-.117 1.054l-2.5 2a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 1.054.118m2 2.5a.75.75 0 0 1-.117 1.054l-2.5 2a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 1.054.117"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PizzaCutter;
