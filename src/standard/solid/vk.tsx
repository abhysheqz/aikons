import React from "react";
const Vk: React.FC<
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
        d="M2.502 5.5H5.02c.278 0 .503.228.51.504.185 7.538 4.526 8.496 4.526 8.496l.001-8.5c0-.276.226-.5.504-.5h2.518c.278 0 .503.224.503.5l-.002 4.5c3.518-1.552 4.61-3.707 4.922-4.594a.59.59 0 0 1 .542-.406h2.47c.323 0 .555.294.456.598-.424 1.296-1.714 4.383-4.77 6.055 1.9 1.12 3.922 2.922 4.78 5.74.093.307-.147.607-.47.607h-2.53a.57.57 0 0 1-.503-.33c-.39-.821-1.682-2.973-4.896-4.17l.001 4c0 .276-.234.5-.512.493C2.626 18.197 2.034 8.838 2 5.999a.497.497 0 0 1 .502-.499"
      />
    </svg>
  );
};
export default Vk;
