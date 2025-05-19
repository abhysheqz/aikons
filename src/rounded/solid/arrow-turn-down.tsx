import React from "react";
const ArrowTurnDown: React.FC<
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
        d="M6 14a1 1 0 0 1-1-1V8.5a5.5 5.5 0 1 1 11 0V16h2a1 1 0 0 1 .805 1.593l-.008.01-.02.028-.076.1a30 30 0 0 1-1.15 1.425c-.336.387-.72.8-1.087 1.125a4 4 0 0 1-.592.447c-.18.108-.495.272-.872.272s-.691-.164-.872-.273a4 4 0 0 1-.592-.446c-.367-.325-.751-.738-1.088-1.125a27 27 0 0 1-1.225-1.525l-.02-.027-.006-.008-.002-.003A1 1 0 0 1 12 16h2V8.5a3.5 3.5 0 1 0-7 0V13a1 1 0 0 1-1 1"
      />
    </svg>
  );
};
export default ArrowTurnDown;
