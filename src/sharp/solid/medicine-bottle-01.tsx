import React from "react";
const MedicineBottle_01: React.FC<
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
        d="M6.53 1.519a.98.98 0 0 1 .678-.269h9.584c.529 0 .958.41.958.917v3.666c0 .507-.43.917-.958.917H7.208c-.529 0-.958-.41-.958-.917V2.167c0-.243.101-.477.28-.648m1.637 1.564v1.834h7.666V3.083z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.399 6.912c.04-.11.099-.23.272-.577H7.329c.173.346.232.466.272.577A2.25 2.25 0 0 1 7.43 8.82c-.06.102-.138.21-.37.52l-.447.594c-.41.546-.673.898-.867 1.289a4.8 4.8 0 0 0-.416 1.247c-.08.429-.08.869-.079 1.551V22c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-7.98c0-.682 0-1.122-.08-1.551a4.8 4.8 0 0 0-.415-1.247c-.194-.391-.458-.743-.867-1.289l-.446-.595c-.233-.31-.312-.417-.372-.519a2.25 2.25 0 0 1-.171-1.907M11 13v2H9v2h2v2h2v-2h2v-2h-2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicineBottle_01;
