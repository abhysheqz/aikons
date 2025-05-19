import React from "react";
const ComingSoon_01: React.FC<
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
        d="M12 1.625a6 6 0 1 1 0 12 6 6 0 0 1 0-12m.75 3.5a.75.75 0 0 0-1.5 0v2.5c0 .323.207.61.513.712l1.5.5a.75.75 0 0 0 .474-1.424l-.987-.329zM1.25 17.175a1.3 1.3 0 0 1 1.3-1.3H5a.75.75 0 0 1 0 1.5H2.75v1h1.7a1.3 1.3 0 0 1 1.3 1.3v1.4a1.3 1.3 0 0 1-1.3 1.3H2a.75.75 0 0 1 0-1.5h2.25v-1h-1.7a1.3 1.3 0 0 1-1.3-1.3zm5.5-.05c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25zm1.5.25v3.5h1.5v-3.5zm4-.25c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25zm1.5.25v3.5h1.5v-3.5zm4-.441a1.059 1.059 0 0 1 2.006-.474l1.494 2.988v-2.823a.75.75 0 0 1 1.5 0v4.691a1.059 1.059 0 0 1-2.006.474l-1.494-2.988v2.823a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComingSoon_01;
