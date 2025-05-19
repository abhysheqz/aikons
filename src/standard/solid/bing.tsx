import React from "react";
const Bing: React.FC<
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
        d="M3.606 1.362a.75.75 0 0 1 .73-.033l4 2A.75.75 0 0 1 8.75 4v11.708l4.422-2.527-1.41-.47a.75.75 0 0 1-.49-.53l-1-4a.75.75 0 0 1 .929-.904l8.998 2.5a.75.75 0 0 1 .55.723V15a.75.75 0 0 1-.373.648l-11.998 7a.75.75 0 0 1-.776-.012l-4-2.5a.75.75 0 0 1-.352-.636V2a.75.75 0 0 1 .356-.638"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bing;
