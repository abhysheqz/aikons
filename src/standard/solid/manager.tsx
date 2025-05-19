import React from "react";
const Manager: React.FC<
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
        d="m11.75 21.466-3.301-8.488a.75.75 0 0 0-.699-.478h-2A2.75 2.75 0 0 0 3 15.25v7c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75v-7a2.75 2.75 0 0 0-2.75-2.75h-2a.75.75 0 0 0-.699.478z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.112 12.856a.75.75 0 0 1 .638-.356h2a.75.75 0 0 1 .67 1.085l-.898 1.797.472 3.775a.75.75 0 0 1-.033.33l-.5 1.5a.75.75 0 0 1-1.422 0l-.5-1.5a.75.75 0 0 1-.033-.33l.472-3.775-.899-1.797a.75.75 0 0 1 .033-.73M7.5 5.75a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Manager;
