import React from "react";
const TextWrap: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 9a1 1 0 0 1 1-1h13.5a5.5 5.5 0 1 1 0 11H16v2.001a1 1 0 0 1-1.697.716c-.105-.102-.39-.33-.718-.587-.29-.228-.632-.496-.959-.773a9 9 0 0 1-1.004-.968 3.3 3.3 0 0 1-.4-.571A1.74 1.74 0 0 1 11 18c0-.333.114-.616.222-.818.112-.21.256-.402.4-.57a9 9 0 0 1 1.004-.969c.327-.277.67-.546.96-.773.327-.258.612-.485.717-.587A1 1 0 0 1 16 15V17h.5a3.5 3.5 0 1 0 0-7H3a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default TextWrap;
