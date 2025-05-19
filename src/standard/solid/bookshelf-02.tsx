import React from "react";
const Bookshelf_02: React.FC<
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
        d="M2 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12c0 1.48-.804 2.773-2 3.465V22a1 1 0 1 1-2 0v-1H6v1a1 1 0 1 1-2 0v-1.535A4 4 0 0 1 2 17zm4-2a2 2 0 0 0-2 2v5h2V6a1 1 0 1 1 2 0v4h2.023L8.572 6.372a1 1 0 0 1 1.857-.743L12.176 10H13V6a1 1 0 1 1 2 0v4h1.78l-.76-3.804a1 1 0 0 1 1.96-.392L18.82 10H20V5a2 2 0 0 0-2-2zm4 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookshelf_02;
