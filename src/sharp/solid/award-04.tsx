import React from "react";
const Award_04: React.FC<
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
        d="M6.25 14.697c0-.523.43-.947.958-.947h9.584c.529 0 .958.424.958.947v7.106a.94.94 0 0 1-.421.784.97.97 0 0 1-.893.095L12 20.928l-4.436 1.754a.97.97 0 0 1-.893-.095.95.95 0 0 1-.421-.784zm1.917.948v4.758l3.477-1.375a.97.97 0 0 1 .712 0l3.477 1.375v-4.758z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.335 1.33a.75.75 0 0 0-.67 0l-7 3.5a.75.75 0 0 0-.415.67v8c0 .284.16.544.415.67l7 3.5a.75.75 0 0 0 .67 0l7-3.5a.75.75 0 0 0 .415-.67v-8a.75.75 0 0 0-.415-.67zm-1.871 11.548 5.705-5.135-1.338-1.486-4.295 3.865-1.329-1.329-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_04;
