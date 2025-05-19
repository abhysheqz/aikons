import React from "react";
const PeerToPeer_01: React.FC<
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
        d="M2.75 1A1.75 1.75 0 0 0 1 2.75v4c0 .966.784 1.75 1.75 1.75H5v1h-.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H6.5v-1h2.25a1.75 1.75 0 0 0 1.75-1.75v-4A1.75 1.75 0 0 0 8.75 1zm10.5 3a.75.75 0 0 0 0 1.5h3.5c.69 0 1.25.56 1.25 1.25v1.69l-.72-.72a.75.75 0 1 0-1.06 1.06l1.396 1.397a1.104 1.104 0 0 0 1.884-.78V6.75A2.75 2.75 0 0 0 16.75 4zM6.22 15.78l-.72-.72v1.69c0 .69.56 1.25 1.25 1.25h3.5a.75.75 0 1 1 0 1.5h-3.5A2.75 2.75 0 0 1 4 16.75v-2.646a1.104 1.104 0 0 1 1.884-.78L7.28 14.72a.75.75 0 1 1-1.06 1.06M13 14.25c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 20.75 20H18.5v1h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5H17v-1h-2.25A1.75 1.75 0 0 1 13 18.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PeerToPeer_01;
