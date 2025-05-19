import React from "react";
const Wardrobe_01: React.FC<
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
        d="M2 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-3 3.874V22a1 1 0 1 1-2 0v-1H7v1a1 1 0 1 1-2 0v-1.126A4 4 0 0 1 2 17zm4 14h5v-4H4v2a2 2 0 0 0 2 2M6 3a2 2 0 0 0-2 2v2h7V3zM4 13h7V9H4zm11-3.5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_01;
