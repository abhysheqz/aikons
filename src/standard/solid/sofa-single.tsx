import React from "react";
const SofaSingle: React.FC<
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
        d="M7.316 4.141A1 1 0 0 1 8.306 3h7.388a1 1 0 0 1 .99 1.141l-.657 4.599a3 3 0 0 0-.96 1.63l-.163.688A7.7 7.7 0 0 0 12 10.5a7.7 7.7 0 0 0-2.904.559l-.163-.69a3 3 0 0 0-.96-1.629zM5.848 8.004l-.512-3.58A3 3 0 0 1 8.306 1h7.388a3 3 0 0 1 2.97 3.424l-.511 3.58a3 3 0 0 1 1.71 5.347l-1.194 4.197a2 2 0 0 1-1.412 1.386l.706 2.824a1 1 0 0 1-1.94.485L15.212 19H8.778l-.81 3.243a1 1 0 1 1-1.94-.485l.705-2.827a2 2 0 0 1-1.403-1.383L4.136 13.35a3 3 0 0 1 1.711-5.347m3.716 5.036.227.96h4.418l.227-.96A5.55 5.55 0 0 0 12 12.5c-.917 0-1.752.205-2.436.54"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SofaSingle;
