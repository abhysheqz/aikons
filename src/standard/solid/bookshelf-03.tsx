import React from "react";
const Bookshelf_03: React.FC<
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
        d="M2 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v16a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm2 4.996v4.996h8.75V12a.75.75 0 0 1 1.5 0v2.992h.729l.793-3.174a.75.75 0 1 1 1.456.364l-.703 2.81h1.225V12a.75.75 0 0 1 1.5 0v2.992H20V9.997zm4.818-5.724a.75.75 0 0 1 .91.546l.857 3.428H9.038l-.766-3.064a.75.75 0 0 1 .546-.91M7.25 5v3.246h-1.5V5a.75.75 0 1 1 1.5 0m4 3.246V5a.75.75 0 0 1 1.5 0v3.246zM11 18.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookshelf_03;
