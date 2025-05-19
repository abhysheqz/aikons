import React from "react";
const Advertisiment: React.FC<
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
        d="M2.25 5.75A2.75 2.75 0 0 1 5 3h16a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 21 22.5H5a2.75 2.75 0 0 1-2.75-2.75zm6.032 2.784A.75.75 0 0 1 9 8h1a.75.75 0 0 1 .719.534l1.496 4.99.997 2.989a.75.75 0 0 1-1.423.474l-.83-2.487H8.042l-.83 2.487a.75.75 0 0 1-1.422-.474l.996-2.99zM8.508 13h1.984L9.5 9.693zM20.25 9.25a.75.75 0 0 0-1.5 0V12h-1.233c-1.512 0-2.767 1.221-2.767 2.75s1.255 2.75 2.767 2.75H19.5a.75.75 0 0 0 .75-.75zm-2.733 4.25h1.233V16h-1.233c-.7 0-1.267-.566-1.267-1.25s.567-1.25 1.267-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Advertisiment;
