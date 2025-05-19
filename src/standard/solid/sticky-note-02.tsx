import React from "react";
const StickyNote_02: React.FC<
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
        d="M18.569 6.216a1 1 0 0 0-1.24-.698L7.2 8.412a1 1 0 0 0-.687 1.236L9.43 19.866a1 1 0 0 0 1.204.696l5.487-1.372.715-4.285a2 2 0 0 1 2.457-1.611l1.293.323zm1.476 9.326-1.236-.309-.309 1.854zM16.78 3.595a3 3 0 0 1 3.718 2.095l2.162 7.927a3 3 0 0 1-.773 2.911L18.1 20.316a3 3 0 0 1-1.394.789L11.12 22.5a3 3 0 0 1-3.612-2.086l-2.92-10.217A3 3 0 0 1 6.65 6.489z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v1.326L7.198 8.412a1 1 0 0 0-.687 1.236L9.183 19H4a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StickyNote_02;
