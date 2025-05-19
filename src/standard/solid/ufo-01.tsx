import React from "react";
const Ufo_01: React.FC<
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
        d="M6 9a1 1 0 0 0-.64.232l-2.64 2.2A2 2 0 0 0 2 12.968v.064a2 2 0 0 0 .72 1.536l2.64 2.2A1 1 0 0 0 6 17h12a1 1 0 0 0 .64-.232l2.64-2.2a2 2 0 0 0 .72-1.536v-.064a2 2 0 0 0-.72-1.536l-2.64-2.2A1 1 0 0 0 18 9zm2 3a1 1 0 1 0 0 2h.012a1 1 0 1 0 0-2zm3.994 0a1 1 0 1 0 0 2h.012a1 1 0 1 0 0-2zm3.994 0a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5a5 5 0 0 0-5 5 1 1 0 1 1-2 0 7 7 0 0 1 14 0 1 1 0 1 1-2 0 5 5 0 0 0-5-5M17.684 15.052a1 1 0 0 1 1.265.632L19.721 18h1.28a1 1 0 1 1 0 2h-1.28a2 2 0 0 1-1.897-1.367l-.772-2.316a1 1 0 0 1 .632-1.265M6.316 15.052a1 1 0 0 1 .633 1.265l-.772 2.316A2 2 0 0 1 4.279 20H3a1 1 0 1 1 0-2h1.28l.771-2.316a1 1 0 0 1 1.265-.632"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ufo_01;
