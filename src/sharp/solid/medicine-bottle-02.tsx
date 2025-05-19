import React from "react";
const MedicineBottle_02: React.FC<
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
        d="M4.53 1.518a.98.98 0 0 1 .678-.269h9.584c.529 0 .958.41.958.917v3.666c0 .507-.43.917-.958.917H5.208c-.529 0-.958-.41-.958-.917V2.166c0-.243.101-.477.28-.648m1.637 1.564v1.834h7.666V3.082z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.485 11.768a6.25 6.25 0 0 0-4.545 10.981H4a.75.75 0 0 1-.75-.75v-7.98c0-.682 0-1.122.08-1.551.08-.433.22-.853.415-1.247.194-.391.458-.743.867-1.289l.446-.594c.233-.31.312-.418.371-.52a2.25 2.25 0 0 0 .172-1.907c-.04-.11-.099-.23-.272-.577h9.342a6 6 0 0 0-.272.577 2.25 2.25 0 0 0 .172 1.907c.06.102.139.21.37.52l.447.594c.41.546.673.898.867 1.289q.132.266.23.547"
      />
      <path
        fill="currentColor"
        d="M12.45 21.154a4.751 4.751 0 0 1 5.945-7.258zM19.555 14.847l-5.945 7.257a4.751 4.751 0 0 0 5.945-7.257"
      />
    </svg>
  );
};
export default MedicineBottle_02;
