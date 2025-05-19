import React from "react";
const Bookshelf_01: React.FC<
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
        d="M2.25 5A3.75 3.75 0 0 1 6 1.25h12A3.75 3.75 0 0 1 21.75 5v5.25h-4V6a.75.75 0 0 0-1.5 0v4.25h-2.242l-1.812-4.529a.75.75 0 0 0-1.392.558l1.588 3.971H7.75V6a.75.75 0 1 0-1.5 0v4.25h-4zm0 6.75h19.5V17A3.75 3.75 0 0 1 20 20.173V22a1 1 0 1 1-2 0v-1.25h-1.557l1.288-5.581a.75.75 0 1 0-1.462-.338l-1.366 5.919H12.75V15a.75.75 0 0 0-1.5 0v5.75h-2.5V15a.75.75 0 0 0-1.5 0v5.75H6V22a1 1 0 1 1-2 0v-1.827A3.75 3.75 0 0 1 2.25 17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookshelf_01;
