import React from "react";
const Slide: React.FC<
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
        d="M11.095 4.37a.75.75 0 0 1 1.036.225l8.189 12.738c.367.572 1 .917 1.68.917a.75.75 0 0 1 0 1.5h-4.85c-.505 0-.936 0-1.294-.034-.383-.036-.738-.114-1.082-.302s-.602-.444-.839-.746c-.222-.284-.455-.646-.729-1.071l-3.438-5.35-2.048 6.965a.75.75 0 1 1-1.44-.423l.747-2.539H3.566l-.845 2.956a.75.75 0 0 1-1.442-.412l.996-3.485.008-.03L5.28 4.793a.75.75 0 0 1 1.352-.2L7.695 6.25h3.717l-.543-.844a.75.75 0 0 1 .226-1.037m-7.1 10.38h3.473l.736-2.5H4.709zm1.142-4h3.508l.05-.17-2.43-3.78z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Slide;
