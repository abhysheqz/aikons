import React from "react";
const ComputerSettings: React.FC<
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
        d="M10.5 16.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v10A2.75 2.75 0 0 0 4 17.75h16A2.75 2.75 0 0 0 22.75 15V5A2.75 2.75 0 0 0 20 2.25zm9 4.25a1 1 0 0 0-2 0v.67a3 3 0 0 0-.939.541l-.557-.325a1 1 0 1 0-1.008 1.728l.557.324a3 3 0 0 0 0 1.124l-.557.324a1 1 0 0 0 1.008 1.728l.557-.325c.275.233.592.418.94.54v.671a1 1 0 1 0 2 0v-.67c.346-.123.664-.308.938-.541l.557.325a1 1 0 1 0 1.008-1.728l-.556-.324a3 3 0 0 0 0-1.124l.556-.324a1 1 0 1 0-1.008-1.728l-.557.325a3 3 0 0 0-.939-.54zm-1.864 2.997a1 1 0 1 1 1.727 1.005 1 1 0 0 1-1.727-1.005"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerSettings;
