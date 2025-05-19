import React from "react";
const News: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h16a.75.75 0 0 1 .75.75v4.25H22a.75.75 0 0 1 .75.75v11A2.75 2.75 0 0 1 20 21.75H2a.75.75 0 0 1-.75-.75zM20 20.25c.69 0 1.25-.56 1.25-1.25V8.75h-2.5V19c0 .69.56 1.25 1.25 1.25M5.5 8.75h9v-1.5h-9zm0 4h9v-1.5h-9zm0 4H10v-1.5H5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default News;
