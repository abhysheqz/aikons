import React from "react";
const Hotel_02: React.FC<
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
        d="M3.101 2.817c.48-.446 1.068-.567 1.542-.567h4.425c.54 0 .978.41.978.917 0 .506-.438.916-.978.916H4.643a.4.4 0 0 0-.13.016.1.1 0 0 0-.036.02c-.369.343-.667.9-.966 1.798h3.603c.54 0 .977.41.977.916 0 .507-.438.917-.977.917H2.227c-.3 0-.585-.13-.77-.353a.87.87 0 0 1-.178-.786c.412-1.544.877-2.916 1.822-3.794m10.853.35c0-.507.438-.917.978-.917h4.425c.474 0 1.062.121 1.542.567.945.878 1.41 2.25 1.822 3.794a.87.87 0 0 1-.178.786c-.185.223-.47.353-.77.353h-4.887c-.54 0-.977-.41-.977-.917 0-.506.438-.916.977-.916h3.603c-.3-.897-.597-1.455-.966-1.798a.1.1 0 0 0-.036-.02.4.4 0 0 0-.13-.016h-4.425c-.54 0-.978-.41-.978-.916"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.123 6.25c.1 0 .185-.075.2-.174a5.751 5.751 0 0 1 11.353 0c.016.1.1.174.201.174H21a.75.75 0 0 1 .75.75v11.052c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H15.2a.2.2 0 0 1-.2-.2v-3.8a3 3 0 1 0-6 0v3.8a.2.2 0 0 1-.2.2H6.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242V7A.75.75 0 0 1 3 6.25zm-.123 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM16.75 11a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M11.25 8a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.55c0-.11.09-.2.2-.2h1.1c.11 0 .2.09.2.2V11a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v.55a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 18.75v3.8a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-3.8a1 1 0 1 1 2 0"
      />
    </svg>
  );
};
export default Hotel_02;
