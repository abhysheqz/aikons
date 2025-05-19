import React from "react";
const TextItalicSlash: React.FC<
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
        d="M11 20.001H5M3 3l18 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 7c0-.632 0-1.046-.08-1.323a2.05 2.05 0 0 0-1.166-1.3c-.265-.108-.566-.139-1.166-.2C15.17 4.03 13.388 4 12 4H8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 4-.8 3.2M8 20l2.4-9.6"
      />
    </svg>
  );
};
export default TextItalicSlash;
