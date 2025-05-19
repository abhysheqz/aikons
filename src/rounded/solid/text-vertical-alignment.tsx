import React from "react";
const TextVerticalAlignment: React.FC<
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
        d="M11.5 4a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M11.5 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M1.5 12a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1M11.5 20a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M11.5 16a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M5.5 1.5c-.238 0-.512.06-.767.19a1.58 1.58 0 0 0-.738.784L1.58 8.106a1 1 0 0 0 1.838.788l.617-1.438h2.9290000000000003l.616 1.438a1 1 0 0 0 1.838-.788L7.006 2.474c-.344-.801-1.115-.967-1.48-.974zm0 2.539-.607 1.417h1.2149999999999999zM5.5 14.5c-.238 0-.512.06-.767.19a1.58 1.58 0 0 0-.738.784L1.58 21.106a1 1 0 0 0 1.838.788l.617-1.438h2.9290000000000003l.616 1.438a1 1 0 0 0 1.838-.788l-2.413-5.632c-.344-.801-1.115-.967-1.48-.974zm0 2.539-.607 1.417h1.2149999999999999z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextVerticalAlignment;
