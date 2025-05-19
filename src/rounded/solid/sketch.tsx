import React from "react";
const Sketch: React.FC<
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
        d="m17.634 3.262-5.5-1a.8.8 0 0 0-.268 0l-5.5 1a.75.75 0 0 0-.446.263l-4.5 5.5a.75.75 0 0 0 .014.967l10 11.5a.75.75 0 0 0 1.132 0l10-11.5a.75.75 0 0 0 .015-.967l-4.5-5.5a.75.75 0 0 0-.447-.263M7.5 8 6 5l.179 3.75L2.5 9.5l4.008.75L11 18.5l-2.856-8.25h7.712L13 18.5l4.492-8.25L21.5 9.5l-3.679-.75L18 5l-1.5 3-3.781-4.066 2.758 4.816H8.523l2.758-4.816z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sketch;
