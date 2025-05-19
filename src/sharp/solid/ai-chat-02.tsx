import React from "react";
const AiChat_02: React.FC<
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
        d="M14.14 1.772c-.32-.022-.691-.022-1.35-.022h-1.58c-.659 0-1.03 0-1.35.022a9.25 9.25 0 0 0-8.588 8.588c-.022.32-.022.77-.022 1.43s0 1.03.022 1.35a9.2 9.2 0 0 0 1.507 4.455l-1.455 3.626a.75.75 0 0 0 .935.99l4.178-1.4a9.2 9.2 0 0 0 3.422.917c.32.022.692.022 1.351.022h1.58c.659 0 1.03 0 1.35-.022a9.25 9.25 0 0 0 8.588-8.588c.022-.32.022-.691.022-1.35s0-1.11-.022-1.43a9.25 9.25 0 0 0-8.588-8.588M10.874 8.25H9.268l-2.737 7.184 1.402.534.769-2.018h2.737l.77 2.018 1.4-.534zm-.005 4.2H9.273l.797-2.093zm5.381 3.3v-7.5h-1.5v7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiChat_02;
