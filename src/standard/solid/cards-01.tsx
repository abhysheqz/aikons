import React from "react";
const Cards_01: React.FC<
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
        d="M11.025 2.017a2.75 2.75 0 0 0-3.556 1.61L6.493 6.25H5A2.75 2.75 0 0 0 2.249 9v11a2.75 2.75 0 0 0 2.75 2.75h9a2.75 2.75 0 0 0 2.742-2.542l4.27-11.47a2.75 2.75 0 0 0-1.6-3.53zm5.724 13.87 2.855-7.673a1.25 1.25 0 0 0-.726-1.604L10.49 3.418a1.25 1.25 0 0 0-1.616.733L8.094 6.25h5.905A2.75 2.75 0 0 1 16.749 9zm-8.594-4.408c.7-.84 1.99-.84 2.689 0l1.583 1.9a1.75 1.75 0 0 1 0 2.241l-1.583 1.9c-.7.84-1.99.84-2.689 0l-1.583-1.9a1.75 1.75 0 0 1 0-2.24z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cards_01;
