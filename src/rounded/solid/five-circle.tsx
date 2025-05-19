import React from "react";
const FiveCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M10 6a1 1 0 0 0-.98.804l-1 5a1 1 0 0 0 1.574 1c.124-.076.475-.29.703-.396C10.763 12.194 11.366 12 12 12c1.136 0 2 .788 2 2s-.864 2-2 2c-.941 0-1.424-.36-1.685-.659-.142-.162-.293-.477-.348-.597a1 1 0 0 0-1.937.498c.151.605.485 1.079.78 1.416C9.424 17.36 10.442 18 12 18c2.179 0 4-1.623 4-4s-1.821-4-4-4c-.595 0-1.149.104-1.63.247L10.82 8H15a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FiveCircle;
