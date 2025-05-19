import React from "react";
const EraserAuto: React.FC<
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
        d="M4.064 1.649A1 1 0 0 1 5 1h1a1 1 0 0 1 .937.649l3 8a1 1 0 1 1-1.873.702L7.182 8H3.818l-.881 2.351a1 1 0 0 1-1.873-.702zM4.568 6h1.864L5.5 3.515z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.65 7.516a1.82 1.82 0 0 0-2.574.032l-3.221 3.315 6.871 6.77 3.277-3.405a1.765 1.765 0 0 0-.038-2.493zM17.686 18.713l-6.876-6.775-4.308 4.433a1.765 1.765 0 0 0 .033 2.499l3.185 3.114c.34.332.798.516 1.271.516h2.274c.492 0 .966-.198 1.308-.555z"
      />
    </svg>
  );
};
export default EraserAuto;
