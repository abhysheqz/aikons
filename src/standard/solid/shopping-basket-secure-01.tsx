import React from "react";
const ShoppingBasketSecure_01: React.FC<
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
        d="M11.5 3.25A3.5 3.5 0 0 0 8 6.75v1.5a1 1 0 0 1-2 0v-1.5a5.5 5.5 0 1 1 11 0v1.5a1 1 0 1 1-2 0v-1.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.824 13.422c.421-.23.93-.23 1.352 0a8.4 8.4 0 0 0 2.433.869 1.384 1.384 0 0 1 1.141 1.358v1.971c0 1.555-.773 2.73-1.59 3.531a8.2 8.2 0 0 1-2.13 1.479c-.337.16-.723.16-1.06 0a8.2 8.2 0 0 1-2.13-1.479c-.817-.802-1.59-1.976-1.59-3.53v-1.972c0-.687.502-1.244 1.141-1.358a8.4 8.4 0 0 0 2.433-.869"
      />
      <path
        fill="currentColor"
        d="M6.735 22.75a2.75 2.75 0 0 1-2.723-2.361L2.258 8.106A.75.75 0 0 1 3 7.25h17a.75.75 0 0 1 .742.856l-.68 4.764c-.56-.176-1.02-.4-1.289-.546a2.66 2.66 0 0 0-2.547 0 7.1 7.1 0 0 1-2.055.736A2.634 2.634 0 0 0 12 15.65v1.97c0 2.003 1.003 3.48 1.963 4.423.271.266.55.501.82.707z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_01;
