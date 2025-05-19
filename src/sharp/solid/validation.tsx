import React from "react";
const Validation: React.FC<
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
        d="M7.958 8.612a5.971 5.971 0 1 0 7.43 7.43l1.863.555A7.914 7.914 0 1 1 7.404 6.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.23 13.184 8.725 17.99l-2.477-2.831 1.505-1.317 1.023 1.169 2.995-3.195z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.498 2.502a2.566 2.566 0 0 0-3.938.373c-.219.321-.38.68-.54 1.037-.115.256-.23.512-.367.755q.15.097.278.226l2.177 2.177q.127.127.225.276c.243-.136.499-.251.755-.366.357-.161.715-.322 1.036-.54a2.566 2.566 0 0 0 .373-3.938M16.224 5.6a.8.8 0 0 0-.22-.153l-4.465-2.03-1.819 1.82a.75.75 0 0 0 0 1.06l7.983 7.983a.75.75 0 0 0 1.06 0l1.82-1.819-2.03-4.464a.8.8 0 0 0-.152-.22z"
      />
    </svg>
  );
};
export default Validation;
