import React from "react";
const Highlighter: React.FC<
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
        d="M13.735 2.75a.75.75 0 0 1 .53.22l7.765 7.764a.75.75 0 0 1 0 1.061l-3.735 3.736a1.75 1.75 0 0 1-2.475 0l-6.35-6.35a1.75 1.75 0 0 1 0-2.475l3.735-3.736a.75.75 0 0 1 .53-.22M8.121 9.465l-.042.042c-.73.73-.93 1.777-1.024 2.54-.068.55-.304 1.338-1.01 2.243-.536.685-.597 1.747.103 2.447l2.115 2.115c.7.7 1.761.639 2.447.103.904-.707 1.692-.943 2.243-1.01.763-.094 1.81-.294 2.54-1.025l.042-.042a3 3 0 0 1-.599-.464l-6.35-6.35a3 3 0 0 1-.465-.6M1.963 19.977l2.849-2.928q.183.301.452.572l2.115 2.115q.262.26.552.44l-.914.868a.75.75 0 0 1-.517.206h-4a.75.75 0 0 1-.537-1.273"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Highlighter;
