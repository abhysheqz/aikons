import React from "react";
const JoggerPants: React.FC<
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
        d="M6.5 2.75a.25.25 0 0 1 .25-.25h10a.25.25 0 0 1 .25.25V4H6.5zM5 4.684V2.75C5 1.784 5.784 1 6.75 1h10c.966 0 1.75.784 1.75 1.75v1.934l2.989 16.936a.75.75 0 0 1-.739.88h-5a.75.75 0 0 1-.696-.471l-3.304-8.26-3.304 8.26a.75.75 0 0 1-.696.471h-5a.75.75 0 0 1-.739-.88zm5.286.816L9.14 7.09a.75.75 0 1 0 1.218.876l1.334-1.853 2.414 4.023a.75.75 0 0 0 1.286-.772L13.075 5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default JoggerPants;
