import React from "react";
const CodeSquare: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zm2 5.5c-.69 0-1.25.56-1.25 1.25v1.773l-.874 1.311a.75.75 0 0 0 0 .832l.874 1.311V15.5c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 0 0-1.5h-.75v-1.599a1.25 1.25 0 0 0-.21-.693L6.901 12l.64-.958a1.25 1.25 0 0 0 .209-.693V8.75h.75a.75.75 0 0 0 0-1.5zm7.25.75a.75.75 0 0 1 .75-.75h1c.69 0 1.25.56 1.25 1.25v1.773l.874 1.311a.75.75 0 0 1 0 .832l-.874 1.311V15.5c0 .69-.56 1.25-1.25 1.25h-1a.75.75 0 0 1 0-1.5h.75v-1.599c0-.246.073-.488.21-.693l.639-.958-.64-.958a1.25 1.25 0 0 1-.209-.693V8.75h-.75a.75.75 0 0 1-.75-.75M10 11a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm3.991 0a1 1 0 0 0 0 2H14a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CodeSquare;
