import React from "react";
const AiChemistry_01: React.FC<
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
        d="M15.75 1.248h-12v2H5v14.75a4.75 4.75 0 1 0 9.5 0v-.08l-.53-1.397-2.49-.947v-3.147l2.49-.947.53-1.398V3.248h1.25zm-8.849 2v3.864h5.7V3.248zm8.885 6.994-.258.697c-.362.979-.477 1.244-.667 1.435-.19.19-.456.305-1.435.667l-.697.258v1.407l.697.258c.979.362 1.245.477 1.435.667s.305.456.667 1.435l.258.697h1.407l.258-.697c.362-.979.477-1.244.668-1.435.19-.19.456-.305 1.434-.667l.697-.258v-1.407l-.697-.258c-.979-.362-1.244-.477-1.434-.668-.19-.19-.306-.455-.668-1.434l-.258-.697z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiChemistry_01;
