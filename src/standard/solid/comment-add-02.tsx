import React from "react";
const CommentAdd_02: React.FC<
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
        d="M15.864 2.246H3.75A2.75 2.75 0 0 0 1 4.996v11.997a2.75 2.75 0 0 0 2.75 2.75h1.249v1.286c0 1.43 1.623 2.257 2.78 1.416l3.714-2.702h8.255a2.75 2.75 0 0 0 2.75-2.75V8.886A2.5 2.5 0 0 1 21.75 9h-1v1a2.5 2.5 0 1 1-5 0V9h-1a2.5 2.5 0 0 1 0-5h1l-.001-1q.001-.396.116-.754m6.474 1.824a2.76 2.76 0 0 0-1.66-1.663q.07.285.07.593v1h1.001q.305 0 .59.07"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.248 2a1 1 0 0 1 1 1v2.5h2.501a1 1 0 1 1 0 2h-2.5V10a1 1 0 0 1-2 0V7.5h-2.5a1 1 0 1 1 0-2h2.5L17.247 3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentAdd_02;
