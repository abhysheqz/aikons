import React from "react";
const Triangle_01: React.FC<
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
        d="M12 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M19.8 8.9a1 1 0 0 1-.2 1.4l-2 1.5a1 1 0 0 1-1.2-1.6l2-1.5a1 1 0 0 1 1.4.2M4.2 8.9a1 1 0 0 1 1.4-.2l2 1.5a1 1 0 1 1-1.2 1.6l-2-1.5a1 1 0 0 1-.2-1.4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 3.087c.762-1.371 2.735-1.371 3.497 0l8.3 14.941C22.789 19.361 21.825 21 20.3 21H3.7c-1.526 0-2.49-1.639-1.75-2.972zm4.21 5.4a6.17 6.17 0 0 1-4.922 0l-3.182 5.729c1.92.633 3.257 2.58 3.572 4.784h4.142c.314-2.205 1.65-4.151 3.571-4.784z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Triangle_01;
