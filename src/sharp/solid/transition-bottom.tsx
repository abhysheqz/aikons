import React from "react";
const TransitionBottom: React.FC<
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
        d="M22 1.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V2A.75.75 0 0 1 2 1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.795 20.861v-6.61h1.954v7.555c0 .521-.437.944-.977.944H2.227c-.54 0-.978-.423-.978-.944V14.25h1.955v6.611z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.207 16.207-3.208 3.207-3.207-3.207 1.415-1.414.792.793V10h2v5.586l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransitionBottom;
