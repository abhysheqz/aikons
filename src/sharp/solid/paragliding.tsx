import React from "react";
const Paragliding: React.FC<
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
        d="m12 2.5.435.308c2.721 1.933 7.56 6.468 9.667 9.458.676.958.66 2.09.647 2.93l-.003.304v1.118L12 12.213 1.254 16.618V15.5l-.003-.303c-.012-.842-.028-1.973.647-2.93 2.109-2.99 6.947-7.526 9.668-9.459z"
      />
      <path
        fill="currentColor"
        d="m9.04 17.75 1.67-5.012-1.422-.474-1.389 4.164-2.912-2.496-.976 1.138 3.376 2.895-.1.299A.75.75 0 0 0 8 19.25h3.25v2.25h1.5v-2.25h3.25a.75.75 0 0 0 .711-.987l-.1-.3 3.377-2.893-.976-1.14-2.912 2.497-1.389-4.164-1.423.474 1.672 5.013z"
      />
    </svg>
  );
};
export default Paragliding;
