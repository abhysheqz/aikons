import React from "react";
const AircraftGame: React.FC<
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
        d="M12.538 2.554 12.001 2l-.538.554c-1.616 1.663-4.47 5.263-4.607 11.703l-.814.369c-.29-1.71-.958-2.799-1.583-3.432l-.534-.54-.534.54c-.62.628-1.554 2.076-1.95 3.8-.404 1.756-.265 3.888 1.427 5.708l.358.385 4.32-1.83L8.46 22h7.081l.914-2.743 4.32 1.83.358-.385c1.692-1.82 1.831-3.952 1.427-5.708-.396-1.724-1.33-3.172-1.95-3.8l-.534-.54-.534.54c-.625.633-1.294 1.722-1.583 3.432l-.814-.369c-.137-6.44-2.99-10.04-4.607-11.703M11.251 9.75v2h1.5v-2zM21.001 3.25v2h-2v-2zm0 4v2h-2v-2zM5.001 3.25v2h-2v-2zm0 4v2h-2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AircraftGame;
