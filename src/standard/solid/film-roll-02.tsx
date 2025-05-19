import React from "react";
const FilmRoll_02: React.FC<
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
        d="M10.5 1a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19M7.707 6.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414zm7 1.414a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zM10.5 9.5a1 1 0 0 0 0 2h.008a1 1 0 0 0 0-2zm-1.793 4.207a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414zm5-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 19a1 1 0 0 1 1-1h10a2.5 2.5 0 0 1 0 5h-5a1 1 0 1 1 0-2h5a.5.5 0 0 0 0-1h-10a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilmRoll_02;
