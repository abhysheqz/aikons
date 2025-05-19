import React from "react";
const Sphere: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v7.208a2.5 2.5 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 11.937V12c0 6.075 4.925 11 11 11s11-4.925 11-11v-.093q0-.048-.002-.095C22.898 5.824 18.012 1 12 1S1.102 5.824 1.002 11.812zm2-.063c.02-.347.335-.918 1.46-1.536 1.1-.604 2.719-1.096 4.668-1.346a1 1 0 1 0-.256-1.984c-1.997.257-3.79.76-5.152 1.459A9 9 0 0 1 12 3a9 9 0 0 1 8.28 5.467c-1.362-.7-3.155-1.202-5.153-1.459a1 1 0 0 0-.255 1.984c1.95.25 3.568.742 4.668 1.346 1.125.618 1.44 1.189 1.46 1.536v.052c-.006.21-.112.498-.481.855-.385.372-.993.753-1.827 1.095C17.03 14.556 14.664 15 12 15s-5.03-.444-6.692-1.124c-.834-.342-1.442-.723-1.827-1.095-.37-.357-.474-.646-.48-.855z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sphere;
