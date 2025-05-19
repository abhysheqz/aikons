import React from "react";
const Shopify: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 4v19m0-19L4 7.5l-1 13L16 23m0-19 1.5 1.148h1.63l1.271 8.397C20.8 16.178 21 18.837 21 21.5L16 23M12.992 4.5c-.083-1.837-.832-3.252-1.991-3.47C9.439.733 7.725 2.72 7.173 5.464q-.088.435-.13.857"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.868 4.33c-.294-1.181-.914-2.017-1.758-2.182-1.317-.257-2.746 1.208-3.454 3.399M12.79 9.424c-1-.42-3.6-1.178-4.286.842-.37 1.09.294 2.252 1.713 3.367 1.987 1.56 1.65 2.891 1.286 3.367-1.285 1.684-3.857.702-4.714 0"
      />
    </svg>
  );
};
export default Shopify;
