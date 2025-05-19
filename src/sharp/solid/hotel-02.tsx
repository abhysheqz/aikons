import React from "react";
const Hotel_02: React.FC<
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
        d="M12 2.75A4.25 4.25 0 0 0 7.75 7v.75H2a.75.75 0 0 1-.67-1.085l2-4A.75.75 0 0 1 4 2.25h4.759c.923-.631 2.039-1 3.241-1s2.319.369 3.241 1H20a.75.75 0 0 1 .67.415l2 4A.75.75 0 0 1 22 7.75h-5.75V7A4.25 4.25 0 0 0 12 2.75m4.744 1c.5.73.838 1.58.957 2.5h3.085l-1.25-2.5zm-9.488 0c-.5.73-.838 1.58-.958 2.5H3.214l1.25-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.298 6.25a5.751 5.751 0 0 1 11.404 0H21a.75.75 0 0 1 .75.75v15.75h-7V17a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v5.75h-7V7A.75.75 0 0 1 3 6.25zm6.952 11.5v5h-2.5v-5zm-7.75-6h2v-1.5h-2zm0 3.5h2v-1.5h-2zm13-3.5h-2v-1.5h2zm0 3.5h-2v-1.5h2zM11.25 7h-1.5v5h1.5v-1.75h1.5V12h1.5V7h-1.5v1.75h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hotel_02;
