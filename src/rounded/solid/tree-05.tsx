import React from "react";
const Tree_05: React.FC<
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
        d="M12 1.25c-1.12 0-2.105.522-2.92 1.267-.813.743-1.503 1.747-2.06 2.827C5.914 7.494 5.25 10.112 5.25 12c0 1.889.54 3.59 1.704 4.826 1.031 1.096 2.486 1.755 4.296 1.895v-5.41l-2.28-2.28a.75.75 0 1 1 1.06-1.061l1.22 1.22V9a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.28 2.28v3.411c1.81-.14 3.265-.799 4.296-1.895C18.21 15.592 18.75 13.89 18.75 12s-.663-4.505-1.77-6.656c-.557-1.08-1.247-2.084-2.06-2.827-.815-.745-1.8-1.267-2.92-1.267"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 18.721v2.529H10a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-1.25V18.72a9.7 9.7 0 0 1-1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_05;
