import React from "react";
const Idea_01: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m7.424 3.075a1 1 0 0 1 0 1.415l-.354.353a1 1 0 1 1-1.414-1.414l.354-.354a1 1 0 0 1 1.414 0m-14.848.001a1 1 0 0 1 1.414 0l.354.354A1 1 0 1 1 4.93 5.844l-.354-.354a1 1 0 0 1 0-1.414M1.5 11.5a1 1 0 0 1 1-1H3a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1m18.5 0a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1M6.207 17.293a1 1 0 0 1 0 1.414l-.5.5a1 1 0 0 1-1.414-1.414l.5-.5a1 1 0 0 1 1.414 0m11.586 0a1 1 0 0 1 1.414 0l.5.5a1 1 0 0 1-1.414 1.414l-.5-.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 20.258V21c0 .967.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 14.75 21v-.742zM4.75 11.5a7.25 7.25 0 0 1 14.5 0c0 2.636-1.403 4.679-3.445 5.908a.33.33 0 0 0-.163.208l-.246 1.227q-.044.22-.138.414H8.742a1.8 1.8 0 0 1-.138-.414l-.246-1.227a.33.33 0 0 0-.162-.208C6.153 16.178 4.75 14.136 4.75 11.5"
      />
    </svg>
  );
};
export default Idea_01;
