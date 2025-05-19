import React from "react";
const Perspective: React.FC<
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
        d="M13 2a1 1 0 1 0-2 0v3.377l2-.267zM20.25 11v2H22a1 1 0 1 0 0-2zM13 18.89l-2-.267V22a1 1 0 1 0 2 0zM3.748 13v-2H2a1 1 0 1 0 0 2z"
      />
      <path
        fill="currentColor"
        d="m11 5.377-4.865.648a2.75 2.75 0 0 0-2.387 2.726v2.25H11zM3.748 13v2.25a2.75 2.75 0 0 0 2.387 2.725l4.865.649V13zM13 18.89l4.136.552a2.75 2.75 0 0 0 3.113-2.726V13H13zM20.25 11V7.285a2.75 2.75 0 0 0-3.114-2.726L13 5.11V11z"
      />
    </svg>
  );
};
export default Perspective;
