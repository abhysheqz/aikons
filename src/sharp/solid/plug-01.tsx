import React from "react";
const Plug_01: React.FC<
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
        d="M9.5 1v6h-2V1zm7 0v6h-2V1zM13 16v7h-2v-7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 5.25H5.25v6.986l3.86 5.514h5.78l3.86-5.514zm-5 3h-3.5v1.5h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plug_01;
