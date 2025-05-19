import React from "react";
const Trademark: React.FC<
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
        d="M5 20.75A3.75 3.75 0 0 1 1.25 17V7A3.75 3.75 0 0 1 5 3.25h14A3.75 3.75 0 0 1 22.75 7v10A3.75 3.75 0 0 1 19 20.75zm0-12.5a.75.75 0 0 0 0 1.5h1.75V15a.75.75 0 0 0 1.5 0V9.75H10a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-4.094l1.454 2.474c.134.23.38.37.646.37h.386a.75.75 0 0 0 .652-.38l1.362-2.406V15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75H18a.75.75 0 0 0-.653.38l-1.813 3.203-1.887-3.213A.75.75 0 0 0 13 8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Trademark;
