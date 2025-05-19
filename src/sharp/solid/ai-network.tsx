import React from "react";
const AiNetwork: React.FC<
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
        d="M19.75 4.75A1.5 1.5 0 1 1 22 6.05V12a.75.75 0 0 1-.75.75H18.5v-1.5h2v-5.2a1.5 1.5 0 0 1-.75-1.3M2 12a.75.75 0 0 1 .75-.75H5.5v1.5h-2v5.2a1.5 1.5 0 1 1-1.5 0zM3.25 2.75A1.5 1.5 0 0 1 6.05 2H12a.75.75 0 0 1 .75.75V5.5h-1.5v-2h-5.2a1.5 1.5 0 0 1-2.8-.75M11.25 21.25V18.5h1.5v2h5.2a1.5 1.5 0 1 1 0 1.5H12a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 4.75H4.75v14.5h14.5zm-8.072 4h-1.5l-2.131 6.216 1.419.487.584-1.703h1.757l.583 1.703 1.42-.487zm-.75 2.438.364 1.062h-.728zm4.822 4.062v-6.5h-1.5v6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiNetwork;
