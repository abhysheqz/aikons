import React from "react";
const MedicineSyrup: React.FC<
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
        d="M6.53 1.518a.98.98 0 0 1 .678-.268h9.584c.529 0 .958.41.958.917v3.666c0 .507-.43.917-.958.917H7.208c-.529 0-.958-.41-.958-.917V2.167c0-.243.101-.477.28-.649m1.637 1.565v1.834h7.666V3.083z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.32 13.741c.239-.28.48-.527.68-.723.2.196.441.444.68.723.293.343.57.716.771 1.083.205.377.299.69.299.926 0 .615-.219.947-.484 1.148-.298.226-.744.352-1.266.352s-.968-.126-1.266-.352c-.265-.2-.484-.533-.484-1.148 0-.237.094-.55.299-.926.2-.367.478-.74.77-1.083"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.67 6.335a6 6 0 0 0-.271.577 2.25 2.25 0 0 0 .171 1.907c.06.102.14.21.372.52l.446.594c.41.546.673.898.867 1.289.196.394.336.814.416 1.247.08.429.08.869.079 1.55V22a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-7.98c0-.681 0-1.121.08-1.55.08-.433.22-.853.415-1.247.194-.391.458-.743.867-1.289l.446-.595c.233-.31.312-.417.371-.519a2.25 2.25 0 0 0 .172-1.907 6 6 0 0 0-.272-.577zM12.2 11.193c.241.207.62.532.707.615.248.235.58.567.914.958.332.388.68.848.948 1.34.263.482.482 1.052.482 1.644 0 1.042-.406 1.834-1.078 2.344-.64.485-1.444.656-2.172.656s-1.532-.171-2.172-.656c-.672-.51-1.078-1.302-1.078-2.344 0-.592.219-1.162.482-1.645.268-.49.616-.951.948-1.34.334-.39.666-.722.914-.957.087-.083.466-.408.707-.615l.199-.171z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicineSyrup;
