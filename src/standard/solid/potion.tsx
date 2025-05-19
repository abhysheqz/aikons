import React from "react";
const Potion: React.FC<
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
        d="M13.186 1.29c-.798-.206-1.642.399-1.587 1.286l.073 1.17-.421-.108a1 1 0 1 0-.501 1.936l.729.188-.524 1.558A7.752 7.752 0 0 0 12 22.75a7.75 7.75 0 0 0 4.522-14.045l.434-1.525.794.206a1 1 0 1 0 .5-1.937l-.378-.098.656-.959c.503-.736.089-1.696-.73-1.908zM6.463 14.25a.194.194 0 0 1-.194-.225 5.814 5.814 0 0 1 11.462 0 .194.194 0 0 1-.194.225H13.95a.2.2 0 0 0-.2.2V15a3.25 3.25 0 1 1-6.5 0v-.55a.2.2 0 0 0-.2-.2zm2.487 0a.2.2 0 0 0-.2.2V15a1.75 1.75 0 1 0 3.5 0v-.55a.2.2 0 0 0-.2-.2zM14.012 13c.55 0 .996-.448.996-1s-.446-1-.996-1h-.009a1 1 0 0 0-.995 1c0 .552.446 1 .995 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Potion;
