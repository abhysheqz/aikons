import React from "react";
const HandSanitizer: React.FC<
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
        d="M7.705 8a5 5 0 0 0-4.986 4.617l-.55 7.153A3 3 0 0 0 5.16 23h8.68a3 3 0 0 0 2.992-3.23l-.55-7.153A5 5 0 0 0 11.297 8zm2.795 5.5a1 1 0 1 0-2 0V15H7a1 1 0 1 0 0 2h1.5v1.5a1 1 0 1 0 2 0V17H12a1 1 0 1 0 0-2h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h-2V7h-4v2h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.182 2.146a2 2 0 0 1 1.998.76L19.3 4.4a1 1 0 1 1-1.6 1.2l-1.12-1.494-5.38 1.092a1 1 0 1 1-.399-1.96z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.99 7.45a.75.75 0 0 1 1.02 0l.002.002.002.001.005.005.016.015a6 6 0 0 1 .243.246c.153.161.359.39.566.66.206.266.425.588.595.934.166.338.311.75.311 1.187 0 .737-.259 1.336-.735 1.738-.455.383-1.02.512-1.515.512s-1.06-.13-1.515-.512c-.476-.402-.735-1.001-.735-1.738 0-.436.145-.849.311-1.187a5.7 5.7 0 0 1 .595-.935 8.5 8.5 0 0 1 .81-.905l.015-.015.005-.005.002-.001z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 3.494a2.501 2.501 0 0 1 5 0v2.504h-2V3.494a.501.501 0 0 0-1 0V6H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandSanitizer;
