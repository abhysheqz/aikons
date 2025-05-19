import React from "react";
const Spatula: React.FC<
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
        d="M16.466 1.78c-1.011-.442-2.143-.163-2.885.579l-4.71 4.71a1.75 1.75 0 0 0-.46 1.665l.73 2.889a.25.25 0 0 1-.066.237l-7.201 7.246-.001.002c-.838.84-.83 2.2.019 3.03.838.821 2.182.815 3.013-.014l7.223-7.208a.25.25 0 0 1 .238-.066l2.898.737a1.75 1.75 0 0 0 1.669-.459l4.708-4.709c.743-.742 1.021-1.874.58-2.885-.448-1.026-1.226-2.6-2.19-3.564-.965-.965-2.54-1.743-3.565-2.19m-.436 5.25a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 1.06 1.06zm2 2a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 1 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spatula;
