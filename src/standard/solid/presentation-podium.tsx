import React from "react";
const PresentationPodium: React.FC<
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
        d="M8.563 1.125H9a1 1 0 1 1 0 2h-.438a1 1 0 0 0-.97.757L6.97 6.368a1 1 0 0 1-1.94-.486l.621-2.485a3 3 0 0 1 2.91-2.272M14.001 2.125a1 1 0 0 1 1-1h.439a3 3 0 0 1 2.91 2.272l.621 2.485a1 1 0 1 1-1.94.486l-.621-2.486a1 1 0 0 0-.97-.757H15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.205 5.375a1.75 1.75 0 0 0-1.72 2.073l.972 5.184a2.75 2.75 0 0 0 2.703 2.243h1.475l.5 3.5h-.414a1.75 1.75 0 0 0-1.66 1.197l-.553 1.658a1.25 1.25 0 0 0 1.186 1.645h8.612a1.25 1.25 0 0 0 1.186-1.645l-.553-1.658a1.75 1.75 0 0 0-1.66-1.197h-.414l.5-3.5h1.475a2.75 2.75 0 0 0 2.703-2.243l.972-5.184a1.75 1.75 0 0 0-1.72-2.073z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationPodium;
