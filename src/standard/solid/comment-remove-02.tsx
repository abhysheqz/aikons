import React from "react";
const CommentRemove_02: React.FC<
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
        d="M22.457 3.707a1 1 0 0 0-1.415-1.414L18.75 4.587l-2.29-2.293a1 1 0 0 0-1.416 1.414l2.292 2.293-2.293 2.292a1 1 0 0 0 1.415 1.414l2.292-2.292 2.294 2.293a1 1 0 0 0 1.413-1.415l-2.293-2.292zm.041 13.28v-5.601a2.5 2.5 0 0 1-2.516-.618L18.75 9.536l-1.232 1.232a2.5 2.5 0 0 1-3.535-3.536L15.214 6l-1.232-1.232a2.5 2.5 0 0 1-.613-2.529H3.75A2.75 2.75 0 0 0 1 4.99v11.997a2.75 2.75 0 0 0 2.75 2.75h1.249v1.287c0 1.43 1.623 2.256 2.78 1.415l3.714-2.701h8.255a2.75 2.75 0 0 0 2.75-2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CommentRemove_02;
