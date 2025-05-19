import React from "react";
const KeyframesDoubleAdd: React.FC<
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
        d="M14.523 18.973c.335.081.702-.02.952-.301h.001l.003-.004 5.27-5.998a1.02 1.02 0 0 0 0-1.34l-5.27-5.998-.003-.003a.965.965 0 0 0-1.094-.256 1 1 0 1 1-.764-1.849 2.965 2.965 0 0 1 3.363.788l5.27 5.997q.187.214.328.451a3.02 3.02 0 0 1-.328 3.53l-5.27 5.998a2.965 2.965 0 0 1-3.363.788 1 1 0 1 1 .764-1.849 1 1 0 0 0 .141.046M7.205 4.177a2.715 2.715 0 0 1 4.086 0l5.27 5.998a2.77 2.77 0 0 1 0 3.65l-5.27 5.998a2.715 2.715 0 0 1-4.086 0L5.74 18.156c-.056-.064-.013-.165.07-.175A2.5 2.5 0 0 0 8 15.501v-.8c0-.111.09-.2.2-.2h.8a2.5 2.5 0 0 0 0-5h-.8a.2.2 0 0 1-.2-.2v-.8A2.5 2.5 0 0 0 5.81 6.018c-.084-.01-.127-.111-.071-.174zM6.5 8.5a1 1 0 0 0-2 0V11H2a1 1 0 1 0 0 2h2.5v2.5a1 1 0 1 0 2 0V13H9a1 1 0 1 0 0-2H6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframesDoubleAdd;
