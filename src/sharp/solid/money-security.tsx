import React from "react";
const MoneySecurity: React.FC<
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
        d="M12 1.25s-.84.5-1.057.616c-.437.231-1.073.546-1.861.877-1.581.663-3.756 1.38-6.157 1.618l-.676.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.214 2.084c.438.228 1.756.798 1.756.798s1.319-.57 1.756-.799a20.3 20.3 0 0 0 3.215-2.084c2.33-1.86 4.78-4.777 4.78-8.819v-6.62l-.676-.067c-2.402-.238-4.576-.955-6.158-1.618a23 23 0 0 1-1.86-.877 49 49 0 0 1-1.057-.616m-1.865 7.59a2.95 2.95 0 0 1 1.114-.506V7.5h1.5v.835c.79.18 1.485.645 1.815 1.345l-1.357.64c-.117-.249-.54-.57-1.208-.57-.405 0-.744.124-.964.29-.22.164-.286.335-.286.46s.066.296.286.46c.22.166.559.29.964.29.7 0 1.36.211 1.865.59.504.377.885.957.885 1.66s-.381 1.283-.885 1.66a2.95 2.95 0 0 1-1.115.506v.834h-1.5v-.835c-.788-.18-1.484-.645-1.814-1.345l1.357-.64c.117.249.539.57 1.207.57.406 0 .744-.124.965-.29.22-.164.285-.335.285-.46s-.066-.296-.285-.46c-.22-.166-.559-.29-.965-.29-.699 0-1.36-.211-1.864-.59-.504-.377-.886-.957-.886-1.66s.382-1.283.886-1.66"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySecurity;
