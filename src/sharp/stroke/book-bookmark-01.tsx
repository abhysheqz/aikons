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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 3.5V9l2.5-1L13 9V3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.113 21.994H7.781c-2.257.064-3.491-.582-3.767-2.422m14.1 2.422h1.864m-1.865 0v-5.085m0 0h1.888V2.012a.01.01 0 0 0-.014-.01l-2.435 1.11c-.52.237-1.085.36-1.656.36H6.702C4.9 3.651 3.853 5.07 4.014 7.492v9.792c-.03.648 0 1.552 0 2.287m14.1-2.663-10.363-.01c-2.732-.102-3.663 1.05-3.737 2.673"
      />
    </svg>
  );
};
export default BookBookmark_01;
