import React from "react";
const Prisoner: React.FC<
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
        d="M7.75 7v2a4.25 4.25 0 0 0 8.5 0V7h1.5v2a5.75 5.75 0 0 1-11.5 0V7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 6.25v1.5h14v-1.5h-1.25v-.294c0-1.713-1.168-3.185-2.864-3.965l-.515-.236c-1.465-.673-3.277-.673-4.742 0l-.515.236c-1.696.78-2.864 2.252-2.864 3.965v.294zM9.75 15.599l2.25 1.5 2.25-1.5V13h1.5v2.434l6.456 1.845a.75.75 0 0 1 .544.721v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .544-.721l6.456-1.845V13h1.5z"
      />
    </svg>
  );
};
export default Prisoner;
