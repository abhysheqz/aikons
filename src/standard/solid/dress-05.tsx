import React from "react";
const Dress_05: React.FC<
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
        d="M8.127 1.01a.75.75 0 0 1 .611.17l3.012 2.582 3.012-2.582a.75.75 0 0 1 .611-.17l3 .5a.75.75 0 0 1 .407.21l3.5 3.5a.75.75 0 0 1 .08.966l-2.5 3.5a.75.75 0 0 1-1.078.15L17.51 8.82c-.338 1.57-.151 3.273.272 4.97l1.478 5.475c.215.796-.157 1.682-.988 2.005a18.4 18.4 0 0 1-6.523 1.23c-2.606 0-5.18-.786-6.442-1.234-.861-.306-1.281-1.214-1.056-2.05l1.465-5.426c.423-1.697.61-3.4.272-4.97L4.72 9.836a.75.75 0 0 1-1.08-.15l-2.5-3.5a.75.75 0 0 1 .08-.966l3.5-3.5a.75.75 0 0 1 .408-.21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dress_05;
