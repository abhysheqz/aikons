import React from "react";
const ShoppingCartAdd_01: React.FC<
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
        d="M2.125 2.999a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .987.84l2.229 13.82a1 1 0 0 0 .987.84h8.297a1 1 0 0 1 1 1c0 .552-1 .33-1.305.583l-.716.417h-6.01l-1.602-.655c-.622 0-.87.464-1.355.133a3 3 0 0 1-1.27-2L4.773 3.999H3.125a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.375 19.001a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M18.375 19.001a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M13.125 1.499a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.45 5.249H6.125a.75.75 0 0 0-.735.897l2 10a.75.75 0 0 0 .864.592l11.5-2a.75.75 0 0 0 .608-.6l1.5-8a.75.75 0 0 0-.737-.889H18.8q.123.354.125.75a2.3 2.3 0 0 1-2.3 2.3h-1.2v1.2a2.3 2.3 0 0 1-4.6 0v-1.2h-1.2a2.3 2.3 0 0 1-2.175-3.05"
      />
    </svg>
  );
};
export default ShoppingCartAdd_01;
