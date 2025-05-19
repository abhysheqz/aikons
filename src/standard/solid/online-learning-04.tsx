import React from "react";
const OnlineLearning_04: React.FC<
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
        d="M2 8a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5.002a1 1 0 0 1 2 0V20a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 19a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H8.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.174 1.502c-2.12-.505-3.783-.172-4.927.31a7 7 0 0 0-.497.232v10.299l.082-.062c.218-.16.552-.37.996-.558.88-.37 2.218-.657 3.998-.232a.75.75 0 0 0 .924-.73v-8.53a.75.75 0 0 0-.576-.729M14.25 12.343V2.044a7 7 0 0 0-.497-.233c-1.144-.481-2.807-.814-4.927-.309a.75.75 0 0 0-.576.73v8.529a.75.75 0 0 0 .924.73c1.78-.425 3.117-.138 3.998.232a5 5 0 0 1 1.078.62"
      />
    </svg>
  );
};
export default OnlineLearning_04;
