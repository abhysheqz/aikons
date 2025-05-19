import React from "react";
const Tree_03: React.FC<
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
        d="M12 1.25A6.75 6.75 0 0 0 5.25 8v4a6.75 6.75 0 0 0 6 6.709V13.31l-2.28-2.28a.75.75 0 1 1 1.06-1.061l1.22 1.22V9a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.28 2.28v3.399a6.75 6.75 0 0 0 6-6.709V8A6.75 6.75 0 0 0 12 1.25M11.25 18.709v2.541H10a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25V18.71a6.8 6.8 0 0 1-1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_03;
