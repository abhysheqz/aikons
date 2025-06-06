import React from "react";
const Mastodon: React.FC<
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
        d="M7.656 16.988c1.597.485 3.418.757 5.344.757 2.084 0 4.045-.319 5.732-.881 2.027-.676 3.018-2.694 3.018-4.634V7.523c0-2.407-1.305-4.857-3.828-5.532-1.77-.475-3.787-.741-5.922-.741s-4.152.266-5.922.74C3.555 2.667 2.25 5.117 2.25 7.524v6.973c0 2.13.535 3.753 1.384 4.974.847 1.217 1.97 1.982 3.065 2.461 1.093.478 2.174.679 2.973.762.402.042.739.054.978.057.12 0 .37-.006.37-.006a9.4 9.4 0 0 0 3.172-.542c.378-.136.878-.349 1.222-.577A.75.75 0 0 0 15.75 21v-1a.75.75 0 0 0-.984-.712 16 16 0 0 1-.961.221c-.649.117-1.604.235-2.805.235-1.228 0-1.979-.26-2.438-.572a1.97 1.97 0 0 1-.806-1.132 3.2 3.2 0 0 1-.1-1.052M8 8a1.5 1.5 0 1 1 3 0v3.5a1 1 0 1 0 2 0V8a1.5 1.5 0 0 1 3 0v5.5a1 1 0 1 0 2 0V8a3.5 3.5 0 0 0-6-2.45A3.5 3.5 0 0 0 6 8v5.5a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mastodon;
