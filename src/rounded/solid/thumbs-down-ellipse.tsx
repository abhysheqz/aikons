import React from "react";
const ThumbsDownEllipse: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m.975-8.093.178.557c.046.146.07.22.088.29a2.4 2.4 0 0 1-.297 1.87c-.04.063-.085.126-.175.254a2 2 0 0 1-.113.15.704.704 0 0 1-.962.06c-.03-.026-.064-.062-.133-.136L8.834 14.77c-.66-.708-.99-1.063-1.162-1.494s-.172-.902-.172-1.844v-.63c0-1.792 0-2.688.592-3.245S9.637 7 11.543 7h.341c1.573 0 2.36 0 2.995.353q.091.05.18.11c.603.399.928 1.078 1.577 2.435.708 1.48 1.062 2.219.75 2.768a1.3 1.3 0 0 1-.123.179c-.404.492-1.26.492-2.974.492h-.27c-.506 0-.759 0-.926.102a.64.64 0 0 0-.28.354c-.056.18.016.408.162.864"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsDownEllipse;
