import React from "react";
const Upload_02: React.FC<
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
        d="M21.447 13.106a1 1 0 0 1 .448 1.341l-2.448 4.895A3 3 0 0 1 16.764 21H7.236a3 3 0 0 1-2.683-1.658l-2.447-4.895a1 1 0 0 1 1.789-.894l2.447 4.894a1 1 0 0 0 .894.553h9.528a1 1 0 0 0 .895-.553l2.447-4.894a1 1 0 0 1 1.341-.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 15a1 1 0 0 0 1-1V7.5h1.5a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 9.5 7.5H11V14a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_02;
