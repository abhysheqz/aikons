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
        d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0m6.457-4.207a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414zm7 1.414a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zM10.5 9.5a1 1 0 0 0 0 2h.008a1 1 0 0 0 0-2zm-1.793 4.207a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414zm5-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 19.75c0-.761-.704-1.37-1.506-1.23l-.04.006-7.323.965a1 1 0 1 1-.262-1.982l7.304-.963C21.157 16.214 23 17.722 23 19.75c0 1.808-1.482 3.25-3.281 3.25H18.7a1 1 0 1 1 0-2h1.019c.72 0 1.281-.573 1.281-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilmRoll_02;
