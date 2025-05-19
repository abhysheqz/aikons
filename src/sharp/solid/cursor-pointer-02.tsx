import React from "react";
const CursorPointer_02: React.FC<
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
      <path fill="currentColor" d="M8.75 8.75 22.25 14l-6 2.25-2.25 6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 6.25a2.75 2.75 0 0 0-1.417 5.108l.643.387-.774 1.285-.643-.388a4.25 4.25 0 1 1 5.833-5.833l.388.643-1.285.774-.387-.643A2.75 2.75 0 0 0 9 6.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.007 3.25a5.757 5.757 0 0 0-.37 11.502l.748.047-.095 1.497-.749-.047a7.257 7.257 0 1 1 7.708-7.71l.047.75-1.497.094-.047-.748A5.757 5.757 0 0 0 9.006 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorPointer_02;
