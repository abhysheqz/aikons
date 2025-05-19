import React from "react";
const CommentBlock_02: React.FC<
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
        d="M18.25 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-2.7 4.5c0-.417.095-.812.263-1.164l3.601 3.6A2.7 2.7 0 0 1 15.55 6.5m5.137 1.164-3.601-3.6a2.7 2.7 0 0 1 3.601 3.6M12.25 6.5c0-1.659.673-3.16 1.76-4.246H3.75A2.75 2.75 0 0 0 1 5.004V17a2.75 2.75 0 0 0 2.75 2.75h1.249v1.286c0 1.43 1.623 2.257 2.78 1.416l3.714-2.702h8.255a2.75 2.75 0 0 0 2.75-2.75v-6.264A6 6 0 0 1 12.25 6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentBlock_02;
