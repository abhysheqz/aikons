import React from "react";
const PencilEdit_01: React.FC<
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
        d="M18.412 3.511a1.745 1.745 0 0 0-2.468 0l-2.186 2.186 4.045 4.045 2.186-2.186a1.745 1.745 0 0 0 0-2.468zM16.742 10.803l-4.045-4.045-8.093 8.093c-.351.351-.6.791-.72 1.273l-.862 3.444a.75.75 0 0 0 .91.91l3.444-.861c.482-.12.922-.37 1.273-.721z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 19.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PencilEdit_01;
