import React from "react";
const BookBookmark_01: React.FC<
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
        d="M20.289 1.396a.98.98 0 0 1 .461.831v15.636h-1.944v2.933h1.944v1.954H6.653a3.41 3.41 0 0 1-3.403-3.42V6.624c0-2.16 1.741-3.91 3.889-3.91h8.75c.547 0 1.028-.138 1.564-.38.274-.125.554-.272.87-.442l.16-.086c.265-.144.555-.3.86-.454a.97.97 0 0 1 .946.043m-3.427 16.468H6.654c-.806 0-1.459.656-1.459 1.465 0 .81.653 1.467 1.459 1.467h10.208zM8 4.5V9l2.5-1L13 9V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookBookmark_01;
