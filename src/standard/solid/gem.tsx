import React from "react";
const Gem: React.FC<
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
        d="m11.077 2.204 1.86 11.023-11.09 1.281q.074-.16.183-.307l8.55-11.542c.14-.19.31-.342.497-.455m2.058.176L14.978 13.3l7.268 1.94a1.8 1.8 0 0 0-.265-.555l-8.571-12a1.8 1.8 0 0 0-.275-.304m8.434 14.75-6.761-1.806-1.858 6.982 8.507-5.104q.058-.035.112-.073M10.91 22.187l1.844-6.927L2.2 16.481q.127.126.283.228z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gem;
