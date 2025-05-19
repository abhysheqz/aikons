import React from "react";
const ThirdBracketSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM9 7a2 2 0 0 0-2 2v1.197l-.832 1.248a1 1 0 0 0 0 1.11L7 13.803V15a2 2 0 0 0 2 2h.5a1 1 0 1 0 0-2H9v-1.197a2 2 0 0 0-.336-1.11L8.202 12l.462-.693A2 2 0 0 0 9 10.197V9h.5a1 1 0 1 0 0-2zm5.5 0a1 1 0 1 0 0 2h.5v1.197a2 2 0 0 0 .336 1.11l.462.693-.462.693a2 2 0 0 0-.336 1.11V15h-.5a1 1 0 1 0 0 2h.5a2 2 0 0 0 2-2v-1.197l.832-1.248a1 1 0 0 0 0-1.11L17 10.197V9a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThirdBracketSquare;
