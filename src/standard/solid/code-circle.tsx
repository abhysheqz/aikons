import React from "react";
const CodeCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-4.5 6c-.69 0-1.25.56-1.25 1.25v1.773l-.874 1.311a.75.75 0 0 0 0 .832l.874 1.311V15.5c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 0 0-1.5h-.75v-1.599a1.25 1.25 0 0 0-.21-.693L6.901 12l.64-.958a1.25 1.25 0 0 0 .209-.693V8.75h.75a.75.75 0 0 0 0-1.5zm7.25.75a.75.75 0 0 1 .75-.75h1c.69 0 1.25.56 1.25 1.25v1.773l.874 1.311a.75.75 0 0 1 0 .832l-.874 1.311V15.5c0 .69-.56 1.25-1.25 1.25h-1a.75.75 0 0 1 0-1.5h.75v-1.599c0-.246.073-.488.21-.693l.639-.958-.64-.958a1.25 1.25 0 0 1-.209-.693V8.75h-.75a.75.75 0 0 1-.75-.75M10 11a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm3.991 0a1 1 0 0 0 0 2H14a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CodeCircle;
