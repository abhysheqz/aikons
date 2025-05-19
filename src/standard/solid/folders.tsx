import React from "react";
const Folders: React.FC<
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
        d="M2.25 2.667c0-.507.437-.917.975-.917h6.845c.947 0 1.835.431 2.384 1.157l1.605 2.124a1 1 0 0 0 .795.386h5.921c.539 0 .975.41.975.916 0 .507-.436.917-.975.917h-5.921c-.947 0-1.836-.431-2.384-1.157l-1.606-2.124a1 1 0 0 0-.794-.386H3.225c-.538 0-.975-.41-.975-.916"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.55 5.52 1.848 2.73H19A2.75 2.75 0 0 1 21.75 11v8.5A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-13c0-.966.784-1.75 1.75-1.75h5.1c.582 0 1.125.288 1.45.77"
      />
    </svg>
  );
};
export default Folders;
