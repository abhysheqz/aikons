import React from "react";
const Candelier_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3h20M12 3v13M19.5 3v8M4.5 3v8M4.5 11c-1.715 0-2.705 2.512-2.464 3.99.207 1.267 4.696 1.424 4.928 0C7.205 13.512 6.215 11 4.5 11M12 16c-1.715 0-2.705 2.512-2.464 3.99.207 1.267 4.696 1.424 4.928 0C14.705 18.512 13.715 16 12 16M19.5 11c-1.715 0-2.705 2.512-2.464 3.99.207 1.267 4.696 1.424 4.928 0 .241-1.478-.749-3.99-2.464-3.99"
      />
    </svg>
  );
};
export default Candelier_02;
