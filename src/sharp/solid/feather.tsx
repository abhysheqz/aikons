import React from "react";
const Feather: React.FC<
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
        d="m6.25 16.69-4 4 1.06 1.06 4-4H6.25zM20.288 3.712a4.993 4.993 0 0 0-7.06 0L6.25 10.69v6L15 7.939 16.06 9l-2.25 2.25h1.44v1.5h-2.94l-5 5h6l6.978-6.977a4.993 4.993 0 0 0 0-7.06"
      />
    </svg>
  );
};
export default Feather;
