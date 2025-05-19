import React from "react";
const ParagraphSpacing: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 2h18M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.017 6v11.978m0-11.977 2.466 2.517m-2.466-2.517L9.492 8.518m2.525 9.46 2.496-2.444m-2.496 2.444-2.525-2.444"
      />
    </svg>
  );
};
export default ParagraphSpacing;
