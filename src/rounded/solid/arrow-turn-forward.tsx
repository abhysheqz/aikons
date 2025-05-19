import React from "react";
const ArrowTurnForward: React.FC<
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
        d="M14 6a1 1 0 0 0-1-1H8.5a5.5 5.5 0 1 0 0 11H16v2a1 1 0 0 0 1.593.805l.01-.008.028-.02.1-.076a30 30 0 0 0 1.425-1.15c.387-.336.8-.72 1.125-1.087.16-.182.321-.384.447-.592.108-.18.272-.495.272-.872s-.164-.691-.273-.872a4 4 0 0 0-.446-.592c-.325-.367-.738-.751-1.125-1.088a27 27 0 0 0-1.525-1.225l-.027-.02-.008-.006-.003-.002A1 1 0 0 0 16 12v2H8.5a3.5 3.5 0 1 1 0-7H13a1 1 0 0 0 1-1"
      />
    </svg>
  );
};
export default ArrowTurnForward;
