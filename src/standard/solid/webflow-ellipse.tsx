import React from "react";
const WebflowEllipse: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m6.48 7.946a1 1 0 0 0-1.96-.392c-.155.77-.51 2.052-1.062 3.323-.268.615-.569 1.199-.899 1.71l-1.081-5.046a1 1 0 0 0-1.943-.054c-.235.864-.713 2.25-1.366 3.552a12 12 0 0 1-.958 1.616l-.72-5.046a1 1 0 0 0-1.98.283l1 7a1 1 0 0 0 1.504.716c1.262-.758 2.243-2.279 2.941-3.672q.15-.3.29-.602l.776 3.626a1 1 0 0 0 1.603.571c1.192-.954 2.063-2.468 2.667-3.857a19.6 19.6 0 0 0 1.189-3.728"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebflowEllipse;
