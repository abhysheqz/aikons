import React from "react";
const Mouse_16: React.FC<
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
        d="M11.25 5.275c-2.388.163-4.036 1.118-5.073 2.66-1.1 1.64-1.427 3.824-1.427 6.066s.326 4.426 1.427 6.065C7.32 21.764 9.203 22.75 12 22.75s4.681-.987 5.823-2.685c1.1-1.64 1.427-3.824 1.427-6.065s-.326-4.427-1.427-6.066c-1.037-1.542-2.685-2.497-5.073-2.66v2.993c.848.122 1.5.85 1.5 1.733v2a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 9.75 12v-2a1.75 1.75 0 0 1 1.5-1.733z"
      />
      <path
        fill="currentColor"
        d="M11.25 10a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25zM6.75 2a.75.75 0 0 0-1.5 0v.5c0 .966.784 1.75 1.75 1.75h4a.25.25 0 0 1 .25.25v.775a11 11 0 0 1 1.5 0V4.5A1.75 1.75 0 0 0 11 2.75H7a.25.25 0 0 1-.25-.25z"
      />
    </svg>
  );
};
export default Mouse_16;
