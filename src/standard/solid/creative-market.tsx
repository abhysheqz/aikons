import React from "react";
const CreativeMarket: React.FC<
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
        d="M10.884 2.055a2.75 2.75 0 0 1 1.944-.805H20A2.75 2.75 0 0 1 22.75 4v7.172c0 .729-.29 1.428-.806 1.944l-8 8a2.75 2.75 0 0 1-3.889 0l-7.171-7.171a2.75 2.75 0 0 1 0-3.89zM16.5 6A1.5 1.5 0 0 1 18 4.5h.009a1.5 1.5 0 0 1 0 3H18A1.5 1.5 0 0 1 16.5 6m-3.768 2.496a.75.75 0 1 0-1.5.008l.012 2.203L9.37 9.642a.75.75 0 0 0-.742 1.303l1.886 1.073-1.883 1.133a.75.75 0 0 0 .773 1.285l1.852-1.114.012 2.182a.75.75 0 0 0 1.5-.008l-.012-2.203 1.872 1.065a.75.75 0 1 0 .742-1.304l-1.885-1.072 1.883-1.133a.75.75 0 1 0-.774-1.285l-1.851 1.114z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreativeMarket;
