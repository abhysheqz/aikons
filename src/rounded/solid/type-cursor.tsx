import React from "react";
const TypeCursor: React.FC<
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
        d="M5.862 7H6a1 1 0 1 1 0 2c-.994 0-1.295.009-1.518.068a2 2 0 0 0-1.414 1.415C3.008 10.705 3 11.006 3 12s.009 1.296.068 1.518a2 2 0 0 0 1.414 1.414c.223.06.524.068 1.518.068a1 1 0 1 1 0 2h-.138c-.795 0-1.386 0-1.897-.136a4 4 0 0 1-2.829-2.829C1 13.524 1 12.933 1 12.138v-.275c0-.796 0-1.386.136-1.898a4 4 0 0 1 2.829-2.829C4.476 7 5.067 7 5.862 7m13.656 2.068C19.295 9.008 18.994 9 18 9h-6a1 1 0 1 1 0-2h6.138c.795 0 1.386 0 1.897.136a4 4 0 0 1 2.829 2.829c.137.511.136 1.102.136 1.898v.275c0 .795 0 1.386-.136 1.897a4 4 0 0 1-2.829 2.829c-.511.137-1.102.137-1.897.136H12a1 1 0 1 1 0-2h6c.994 0 1.295-.008 1.518-.068a2 2 0 0 0 1.414-1.414c.06-.223.068-.524.068-1.518s-.009-1.295-.068-1.517a2 2 0 0 0-1.414-1.415"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v16h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1V4H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TypeCursor;
