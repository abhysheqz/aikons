import React from "react";
const Mortar: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.065A9 9 0 0 0 21 12H3a9 9 0 0 0 5 8.064V22h8z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.459 12 1.55-3.719c.175-.419.606-.629 1.038-.701.374-.062.672-.239.831-.527.397-.718-.21-1.859-1.355-2.55s-2.397-.668-2.793.05c-.16.289-.157.646-.022 1.015.156.427.197.92-.063 1.288L13 12M6.502 5.502 10 9M8.6 3.403c1.546 1.546 1.16 3.039 0 4.198-1.158 1.159-2.651 1.545-4.197 0-1.546-1.546-1.4-5.597-1.4-5.597s4.052-.147 5.598 1.399Z"
      />
    </svg>
  );
};
export default Mortar;
