import React from "react";
const AiChemistry_02: React.FC<
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
        d="m14.405 8.34 2.684 5.15h-.674l-.947 2.49-2.49.947v3.147l2.49.947.658 1.729H5.565a3.32 3.32 0 0 1-3.313-3.33c0-.538.13-1.069.378-1.545L7.6 8.339V3.25H6.002v-2h10v2h-1.597zM9.543 3.25h2.917v5.57l.893 1.715H8.65l.893-1.714zm7.742 11.49-.258.697c-.362.979-.477 1.244-.667 1.435-.19.19-.456.305-1.435.667l-.697.258v1.407l.697.258c.979.362 1.245.477 1.435.668.19.19.305.455.667 1.434l.258.697h1.407l.258-.697c.362-.979.477-1.244.668-1.434.19-.19.456-.306 1.434-.668l.697-.258v-1.407l-.697-.258c-.978-.362-1.244-.477-1.434-.667s-.306-.456-.668-1.435l-.258-.697z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiChemistry_02;
