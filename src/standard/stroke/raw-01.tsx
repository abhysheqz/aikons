import React from "react";
const Raw_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 12.998.02-9.003A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5"
      />
      <path
        fill="currentColor"
        d="M4 16v-.75a.75.75 0 0 0-.75.75zm2.25 0v.75zm-3 6a.75.75 0 0 0 1.5 0zm3.58.335a.75.75 0 1 0 1.34-.67zm1.958-.572a.75.75 0 0 0 1.423.474zM11.5 16v-.75a.75.75 0 0 0-.711.513zm1.789 6.237a.75.75 0 0 0 1.422-.474zM12 16l.711-.237A.75.75 0 0 0 12 15.25zm4.75 0a.75.75 0 0 0-1.5 0zM16 22h-.75c0 .414.336.75.75.75zm.5 0v.75a.75.75 0 0 0 .6-.3zm1.5-2 .6-.45a.75.75 0 0 0-1.2 0zm2.75-4a.75.75 0 0 0-1.5 0zM20 22v.75a.75.75 0 0 0 .75-.75zm-.5 0-.6.45a.75.75 0 0 0 .6.3zm-6.167-1.25a.75.75 0 0 0 0-1.5zm-3.166-1.5a.75.75 0 1 0 0 1.5zM4 16.75h2.25v-1.5H4zM4.75 22v-2.5h-1.5V22zm0-2.5V16h-1.5v3.5zm1.5-.75H4v1.5h2.25zm1-1a1 1 0 0 1-1 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5zm-.67 3.085 1.25 2.5 1.34-.67-1.25-2.5zm4.631 2.402 2-6-1.422-.474-2 6zm4.5-.474-2-6-1.422.474 2 6zM11.5 16.75h.5v-1.5h-.5zm3.75-.75v6h1.5v-6zm.75 6.75h.5v-1.5H16zm1.1-.3 1.5-2-1.2-.9-1.5 2zM19.25 16v6h1.5v-6zm.75 5.25h-.5v1.5h.5zm.1.3-1.5-2-1.2.9 1.5 2zm-6.767-2.3h-3.166v1.5h3.166z"
      />
    </svg>
  );
};
export default Raw_01;
