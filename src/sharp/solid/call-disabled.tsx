import React from "react";
const CallDisabled: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M11.747 18.917a21.5 21.5 0 0 0 4.006-3.165l1.4 1.405a23.3 23.3 0 0 1-4.832 3.726c-1.726.99-3.152 1.476-4.598 1.768-3.06.616-5.468-1.768-6.472-3.632l6.918-3.94zM22.652 7.722c-.292 1.445-.778 2.872-1.768 4.597a22.5 22.5 0 0 1-2.051 2.977l-1.411-1.41c.549-.69 1.05-1.406 1.496-2.14L15.08 8.168l3.94-6.918c1.864 1.004 4.248 3.412 3.632 6.472"
      />
    </svg>
  );
};
export default CallDisabled;
