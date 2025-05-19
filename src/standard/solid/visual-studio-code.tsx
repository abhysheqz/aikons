import React from "react";
const VisualStudioCode: React.FC<
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
        d="M22 5.148v13.705a1 1 0 0 1-.589.912L16.664 21.9a.714.714 0 0 1-.85-.092L2.314 9.206a1 1 0 0 1-.023-1.436l.65-.652a.995.995 0 0 1 1.31-.088l12.764 9.47v-9l-5.293 3.88-3.231-2.369 7.321-6.82a.715.715 0 0 1 .851-.091l4.747 2.135a1 1 0 0 1 .59.913M2.942 16.882l-.65-.652c-.398-.4-.388-1.05.023-1.436l2.239-2.107 2.388 2.224-2.69 2.059a.995.995 0 0 1-1.31-.088"
      />
    </svg>
  );
};
export default VisualStudioCode;
