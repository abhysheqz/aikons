import React from "react";
const WebflowRectangle: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm13.98 7.446a1 1 0 0 0-1.96-.392 17.6 17.6 0 0 1-1.062 3.322c-.268.616-.57 1.2-.899 1.712L13.478 8.79a1 1 0 0 0-1.943-.054c-.235.864-.713 2.25-1.366 3.552a12 12 0 0 1-.958 1.616L8.49 8.86a1 1 0 0 0-1.98.283l1 7a1 1 0 0 0 1.505.716c1.261-.758 2.242-2.279 2.941-3.672q.15-.3.29-.602l.776 3.626a1 1 0 0 0 1.603.571c1.192-.954 2.063-2.468 2.667-3.857a19.6 19.6 0 0 0 1.189-3.728"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebflowRectangle;
