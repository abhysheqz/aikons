import React from "react";
const Heading_03: React.FC<
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
        d="M17 12.778c0-.26.097-.423.242-.542.165-.135.432-.236.758-.236a1 1 0 0 1 1 1c0 .369-.17.61-.39.794-.114.095-.366.223-.456.268a1 1 0 0 0-.582.567.998.998 0 0 0 .603 1.317c.09.045.32.165.435.26.22.184.39.425.39.794a1 1 0 0 1-1 1c-.326 0-.593-.102-.758-.236-.145-.119-.242-.282-.242-.542a1 1 0 0 0-2 0c0 .88.382 1.605.977 2.09.575.47 1.308.688 2.023.688a3 3 0 0 0 3-3 2.93 2.93 0 0 0-.766-2A2.93 2.93 0 0 0 21 13a3 3 0 0 0-3-3c-.715 0-1.448.218-2.023.687a2.65 2.65 0 0 0-.977 2.09 1 1 0 1 0 2 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4a1 1 0 0 1 1 1v6h7V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H5v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_03;
