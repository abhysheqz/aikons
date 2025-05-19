import React from "react";
const TextAllCaps: React.FC<
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
        d="M7 4.024c-.93.04-1.955.127-2.834.215-.572.056-.663.075-.73.101a.72.72 0 0 0-.409.434C3.011 4.828 3 4.91 3 5.5a1 1 0 0 1-2 0v-.1c0-.422-.001-.828.112-1.203A2.72 2.72 0 0 1 2.7 2.48c.362-.143.755-.181 1.175-.222l.094-.01C5.19 2.127 6.759 2 8 2c.639 0 1.36.033 2.068.082a1 1 0 0 1-.135 1.995Q9.456 4.045 9 4.024V20h.998a1 1 0 1 1 0 2H5.43a1 1 0 1 1 0-2H7zM15 4.024q-.456.02-.932.053a1 1 0 0 1-.136-1.995A31 31 0 0 1 16 2c1.242 0 2.81.127 4.032.248l.094.01c.42.04.813.08 1.175.222.75.297 1.354.94 1.588 1.717.113.375.112.781.112 1.204V5.5a1 1 0 1 1-2 0c0-.589-.01-.672-.027-.726a.72.72 0 0 0-.41-.434c-.066-.026-.157-.045-.73-.101A54 54 0 0 0 17 4.024V20h1.571a1 1 0 0 1 0 2h-4.569a1 1 0 1 1 0-2H15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAllCaps;
