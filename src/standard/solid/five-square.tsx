import React from "react";
const FiveSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.997 1.75a2.75 2.75 0 0 0-2.75 2.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.5 4.25a1 1 0 0 0-.98.804l-1 5a1 1 0 0 0 1.574 1c.124-.076.475-.29.703-.396.466-.214 1.069-.408 1.703-.408 1.136 0 2 .788 2 2s-.864 2-2 2c-.941 0-1.423-.36-1.685-.659-.142-.162-.293-.477-.348-.597a1 1 0 0 0-1.937.498c.151.605.485 1.079.78 1.416.614.702 1.632 1.342 3.19 1.342 2.179 0 4-1.623 4-4s-1.821-4-4-4c-.595 0-1.149.104-1.63.247L11.318 8h4.18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FiveSquare;
