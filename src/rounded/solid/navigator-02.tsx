import React from "react";
const Navigator_02: React.FC<
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
        d="M22 4.25a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1M22 19.75a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.041 10.388c.513.384.959.883.959 1.612s-.446 1.228-.959 1.612c-.493.37-1.207.75-2.06 1.203l-1.321.704c-.654.347-1.201.639-1.627.804a2.4 2.4 0 0 1-.697.174 1.15 1.15 0 0 1-.807-.24 1.5 1.5 0 0 1-.41-.525 1.36 1.36 0 0 1-.102-.785c.034-.233.113-.473.207-.71.185-.459.492-1.048.867-1.768.077-.148.138-.266.175-.345.015-.032.023-.049.028-.065l.006-.017a.2.2 0 0 0-.016-.125 7 7 0 0 0-.193-.386c-.375-.72-.682-1.31-.867-1.769a3 3 0 0 1-.207-.71 1.36 1.36 0 0 1 .101-.784c.095-.201.234-.383.411-.525.257-.207.552-.256.807-.24.239.015.478.088.697.173.426.166.973.458 1.627.805l1.321.704c.853.453 1.567.833 2.06 1.203"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M16 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigator_02;
