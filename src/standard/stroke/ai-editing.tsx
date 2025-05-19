import React from "react";
const AiEditing: React.FC<
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
        strokeWidth={1.5}
        d="M6.038 2.822a.493.493 0 0 1 .924 0l.712 1.922c.1.27.312.483.582.583l1.922.71a.493.493 0 0 1 0 .925l-1.922.712a.99.99 0 0 0-.583.582l-.71 1.922a.493.493 0 0 1-.925 0l-.711-1.922a.99.99 0 0 0-.583-.583l-1.922-.71a.493.493 0 0 1 0-.925l1.922-.711c.27-.1.483-.313.583-.583z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.453 9.069 1.492 1.491M6 17.523V21.5h3.978l11.23-11.23a.994.994 0 0 0 0-1.407l-2.57-2.572a.995.995 0 0 0-1.407 0z"
      />
    </svg>
  );
};
export default AiEditing;
