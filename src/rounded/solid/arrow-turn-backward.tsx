import React from "react";
const ArrowTurnBackward: React.FC<
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
        d="M10 6a1 1 0 0 1 1-1h4.5a5.5 5.5 0 1 1 0 11H8v2a1 1 0 0 1-1.593.805l-.01-.008-.028-.02a26 26 0 0 1-.453-.346c-.29-.226-.68-.539-1.072-.88-.387-.336-.8-.72-1.125-1.087a4 4 0 0 1-.447-.592C3.164 15.692 3 15.377 3 15s.164-.691.272-.872c.126-.208.286-.41.447-.592.325-.367.738-.751 1.125-1.088a27 27 0 0 1 1.525-1.225l.027-.02.008-.006.003-.002A1 1 0 0 1 8 12v2h7.5a3.5 3.5 0 1 0 0-7H11a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default ArrowTurnBackward;
