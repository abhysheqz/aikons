import React from "react";
const Note: React.FC<
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
        d="M11.238 1.282a.75.75 0 0 0-.936.507L6.28 15.479a.75.75 0 0 0 .504.929l10.978 3.31a.75.75 0 0 0 .936-.507l4.022-13.69a.75.75 0 0 0-.503-.929zm1.449 6.46 4.773 1.271.386-1.45-4.773-1.271zm-1.023 3.796 2.386.636.386-1.45-2.386-.635z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.784 7.592 5-1.507.433 1.436-4.288 1.292 3.599 12.25 6.256-1.885.432 1.436-6.978 2.104a.75.75 0 0 1-.936-.507L1.28 8.521a.75.75 0 0 1 .504-.929"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note;
