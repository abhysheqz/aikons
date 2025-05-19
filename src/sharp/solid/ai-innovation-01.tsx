import React from "react";
const AiInnovation_01: React.FC<
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
        d="M14 4.25V2.5h1.5v1.75H17V2.5h1.5v1.75H20v1.5h1.75v1.5H20v1.5h1.75v1.5H20v1.5h-1.5v1.75H17v-1.75h-1.5v1.75H14v-1.75h-1.5v-1.5h-1.75v-1.5h1.75v-1.5h-1.75v-1.5h1.75v-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.194c-3.768 0-6.806 3.02-6.806 6.724 0 1.268.354 2.45.97 3.462l-1.661 1.01A8.57 8.57 0 0 1 2.25 9.918C2.25 5.122 6.177 1.25 11 1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 15.25h10c.241 0 .468.09.608.242.141.152.18.348.104.526l-1 2.333c-.103.239-.39.4-.712.4H7c-.323 0-.61-.162-.712-.4l-1-2.333a.48.48 0 0 1 .104-.526A.83.83 0 0 1 6 15.25M7.543 20l.745 2.237A.75.75 0 0 0 9 22.75h4a.75.75 0 0 0 .711-.513L14.458 20z"
      />
    </svg>
  );
};
export default AiInnovation_01;
