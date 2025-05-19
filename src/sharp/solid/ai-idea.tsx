import React from "react";
const AiIdea: React.FC<
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
        d="M8.75 20.498v2.25h5.5v-2.25zM16.299 1.248H17.7l.258.695c.36.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V5.7l-.695.257c-.976.36-1.24.476-1.43.666s-.305.454-.666 1.43l-.258.695H16.3l-.258-.695c-.36-.976-.476-1.24-.665-1.43s-.455-.305-1.43-.666L13.25 5.7V4.297l.695-.258c.976-.36 1.24-.476 1.43-.665s.305-.455.666-1.43z"
      />
      <path
        fill="currentColor"
        d="m19.498 7.56-.926 2.438h-3.144l-.944-2.484L12 6.57V3.426l2.484-.944.22-.58a8.1 8.1 0 0 0-3.204-.654c-4.568 0-8.25 3.76-8.25 8.37 0 3.12 1.596 5.46 4.033 6.868l.552 2.762h7.23l.552-2.762c2.43-1.398 4.133-3.732 4.133-6.867a8.5 8.5 0 0 0-.252-2.059"
      />
    </svg>
  );
};
export default AiIdea;
