import React from "react";
const PyramidMaslowo: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.601 21c1.514 0 2.271 0 2.561-.493s-.077-1.155-.813-2.478l-6.6-11.882c-.774-1.392-1.16-2.088-1.749-2.088-.588 0-.975.696-1.748 2.088L3.65 18.029c-.736 1.323-1.103 1.985-.813 2.478S3.885 21 5.399 21z"
      />
      <path
        fill="currentColor"
        d="M18.5 15.75a.75.75 0 0 0 0-1.5zm-13-1.5a.75.75 0 0 0 0 1.5zm10 0a.75.75 0 0 0 0 1.5zm-7 1.5a.75.75 0 0 0 0-1.5zm7.5-6.5H8v1.5h8zm2.5 5h-3v1.5h3zm-10 0h-3v1.5h3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10v11"
      />
    </svg>
  );
};
export default PyramidMaslowo;
