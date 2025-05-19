import React from "react";
const LegalHammer: React.FC<
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
        d="M12 1.25s-.838.5-1.056.616c-.437.231-1.072.546-1.861.877-1.581.663-3.756 1.38-6.157 1.618l-.676.067v6.62c0 4.042 2.45 6.959 4.78 8.82a20.3 20.3 0 0 0 3.214 2.084c.438.228 1.756.798 1.756.798s1.319-.57 1.757-.799a20.3 20.3 0 0 0 3.214-2.084c2.33-1.86 4.78-4.777 4.78-8.819v-6.62l-.676-.067c-2.402-.238-4.576-.955-6.158-1.618a23 23 0 0 1-1.86-.877C12.839 1.75 12 1.25 12 1.25m.533 5.72a.75.75 0 0 0-1.061 0l-2.5 2.5a.75.75 0 0 0 0 1.06l1.29 1.291-2.97 2.972 1.413 1.414 2.972-2.971 1.295 1.295a.75.75 0 0 0 1.06 0l2.501-2.5a.75.75 0 0 0 0-1.061z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LegalHammer;
