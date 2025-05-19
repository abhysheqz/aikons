import React from "react";
const TextFootnote: React.FC<
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
        d="M1 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5a1 1 0 1 1-2 0V5h-5v14h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H8V5H3v1.5a1 1 0 1 1-2 0zM20 7a1 1 0 0 1 1 1v.634l.486-.292a1 1 0 1 1 1.029 1.715l-.902.541.694.695a1 1 0 1 1-1.414 1.414L20 11.814l-.893.893a1 1 0 0 1-1.414-1.414l.694-.694-.901-.542a1 1 0 0 1 1.029-1.715l.485.292V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextFootnote;
