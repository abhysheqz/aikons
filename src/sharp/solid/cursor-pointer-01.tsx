import React from "react";
const CursorPointer_01: React.FC<
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
        d="M12.864 22.75 8.25 8.25l14.5 4.614-4.946 2.988 4.617 4.591-1.986 1.986-4.604-4.604z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 5.75a2.75 2.75 0 0 0-1.417 5.108l.643.387-.774 1.285-.643-.388a4.25 4.25 0 1 1 5.833-5.833l.388.643-1.285.774-.387-.643A2.75 2.75 0 0 0 8.5 5.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.507 2.75a5.757 5.757 0 0 0-.37 11.502l.748.047-.095 1.497-.749-.047a7.257 7.257 0 1 1 7.708-7.71l.047.75-1.497.094-.047-.748A5.757 5.757 0 0 0 8.506 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorPointer_01;
