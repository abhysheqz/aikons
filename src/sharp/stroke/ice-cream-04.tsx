import React from "react";
const IceCream_04: React.FC<
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
        strokeWidth={1.5}
        d="M16.969 9.042a2.505 2.505 0 0 0-2.465.958m2.465-.958c1.804.333 2.63 2.519 1.546 3.958H6.484c-1.198-1.59-.036-4 2.005-4m8.48.042C17.562 5.235 14 6.5 13 4.5c-.5-1 .502-2.5.502-2.5-2.528 0-4.275 1.557-3.93 3.175m0 0c.133.628.582 1.266 1.423 1.825M9.571 5.175c-2.253.89-1.972 4.29.422 4.775M8.5 22l-2-9h12l-2 9z"
      />
    </svg>
  );
};
export default IceCream_04;
