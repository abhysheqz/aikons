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
        d="M8.95 14.25a.2.2 0 0 0-.2.2V15a1.75 1.75 0 1 0 3.5 0v-.55a.2.2 0 0 0-.2-.2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5m-5.537 7a.194.194 0 0 1-.194-.225 5.814 5.814 0 0 1 11.462 0 .194.194 0 0 1-.194.225H13.95a.2.2 0 0 0-.2.2V15a3.25 3.25 0 1 1-6.5 0v-.55a.2.2 0 0 0-.2-.2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.186 1.29c-.798-.206-1.642.399-1.587 1.286l.073 1.17-.421-.108a1 1 0 1 0-.501 1.936l.729.188-.672 1.998a.8.8 0 0 0-.04.24v.016a.75.75 0 0 0 .802.748q.213-.015.43-.015c1.2 0 2.317.337 3.267.92a.75.75 0 0 0 1.137-.544l.553-1.945.794.206a1 1 0 1 0 .5-1.937l-.378-.098.656-.959c.503-.736.089-1.696-.73-1.908zM15.008 12c0 .552-.446 1-.996 1h-.009a1 1 0 0 1-.995-1c0-.552.446-1 .995-1h.01c.55 0 .995.448.995 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Potion;
