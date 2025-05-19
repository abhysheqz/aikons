import React from "react";
const PenToolMinus: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 7 15 3l7 7-4 2.5"
      />
      <path
        fill="currentColor"
        d="m4.001 21-.744-.097a.75.75 0 0 0 .841.84zm10.732-1.4.097.744.411-.054.174-.377zM5.4 10.267l-.313-.682-.377.174-.054.41zM12.5 7l.53-.53a.75.75 0 0 0-.843-.151zm5.5 5.5.681.313a.75.75 0 0 0-.15-.843zM4.098 21.744l10.732-1.4-.194-1.488-10.732 1.4zm.647-.647 1.399-10.733-1.488-.194-1.399 10.733zm.968-10.149 7.1-3.267-.626-1.362-7.1 3.266zm9.702 8.965 3.266-7.1-1.362-.626-3.267 7.1zm3.115-7.943-5.5-5.5-1.06 1.06 5.5 5.5zm-6.07 3.452-1.443-1.441-1.06 1.06 1.441 1.442zm-1.443-1.441-1.441-1.442-1.06 1.06 1.44 1.442zm-1.06 0L3.47 20.469l1.06 1.06 6.488-6.488z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 4h6" />
    </svg>
  );
};
export default PenToolMinus;
