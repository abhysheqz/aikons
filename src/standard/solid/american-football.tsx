import React from "react";
const AmericanFootball: React.FC<
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
        d="M5.769 5.755c3.212-3.208 7.87-4.544 12.289-3.808l.013.002c.676.125 1.32.394 1.887.783l-5.911 5.9-.84-.84a1 1 0 1 0-1.414 1.415l.838.838-2.588 2.583-.836-.835a1 1 0 1 0-1.414 1.414l.834.834-5.9 5.89a4.9 4.9 0 0 1-.78-1.883l-.003-.013c-.73-4.42.613-9.074 3.825-12.28m4.272 9.7-5.878 5.867a4.9 4.9 0 0 0 1.749.692c4.411.842 9.14-.604 12.309-3.803 3.243-3.191 4.586-7.866 3.818-12.287l-.001-.008a4.9 4.9 0 0 0-.69-1.746l-5.887 5.876.746.747a1 1 0 0 1-1.414 1.414l-.748-.748-2.588 2.584.75.75a1 1 0 0 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AmericanFootball;
