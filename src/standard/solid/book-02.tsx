import React from "react";
const Book_02: React.FC<
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
        d="M6 19a1 1 0 1 0 0 2h14a1 1 0 1 1 0 2H6a3 3 0 1 1 0-6h14a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.295 17.394a1 1 0 0 1-.18 1.395l-.01.008q-.019.015-.065.06c-.061.059-.146.149-.23.265-.172.238-.31.536-.31.878s.138.64.31.878a2 2 0 0 0 .295.325l.01.008a1 1 0 0 1-1.221 1.584 3.446 3.446 0 0 1-.246-.216 4 4 0 0 1-.458-.529c-.328-.453-.69-1.154-.69-2.05s.362-1.598.69-2.05a4 4 0 0 1 .619-.676c.02-.018.07-.058.084-.07a1 1 0 0 1 1.402.19"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1a3 3 0 0 0-3 3v16a1 1 0 1 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm2.001 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM8 10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_02;
