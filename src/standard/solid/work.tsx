import React from "react";
const Work: React.FC<
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
        d="M9.5 2.25A2.25 2.25 0 0 0 7.25 4.5v1.75H5A3.75 3.75 0 0 0 1.25 10v8A3.75 3.75 0 0 0 5 21.75h14A3.75 3.75 0 0 0 22.75 18v-8A3.75 3.75 0 0 0 19 6.25h-2.25V4.5a2.25 2.25 0 0 0-2.25-2.25zm5.75 4V4.5a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v1.75zm-9.966 4.528a.75.75 0 0 1 .938-.494l.652.202a17.57 17.57 0 0 0 10.252 0l.652-.202a.75.75 0 1 1 .444 1.433l-.652.202a18.8 18.8 0 0 1-4.82.817V14a.75.75 0 0 1-1.5 0v-1.264a18.8 18.8 0 0 1-4.82-.817l-.652-.202a.75.75 0 0 1-.494-.939"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Work;
