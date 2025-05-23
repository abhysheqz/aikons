import React from "react";
const EcoEnergy: React.FC<
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
        d="M10.704 1.333a1 1 0 0 1 .208.972l-.96 3-1.904-.61.377-1.18a9.22 9.22 0 0 0-5.445 6.643L1.02 9.76a11.22 11.22 0 0 1 8.74-8.74 1 1 0 0 1 .944.313m9.78 7.092a9.22 9.22 0 0 0-6.642-5.445l.398-1.96a11.22 11.22 0 0 1 8.74 8.74 1 1 0 0 1-1.285 1.152l-3-.96.61-1.904zM1.333 13.296a1 1 0 0 1 .972-.208l3 .96-.61 1.905-1.18-.378a9.22 9.22 0 0 0 6.643 5.445l-.398 1.96a11.22 11.22 0 0 1-8.74-8.74 1 1 0 0 1 .313-.944m14.242 7.188a9.22 9.22 0 0 0 5.445-6.642l1.96.398a11.22 11.22 0 0 1-8.74 8.74 1 1 0 0 1-1.152-1.285l.96-3 1.905.61z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.67 8.688C11.16 7.467 13.42 7 15.499 7h.751v.757c0 1.829-.372 4.2-1.433 5.869-.54.849-1.29 1.563-2.301 1.879-.832.26-1.762.225-2.78-.122.701-1.631 1.778-2.745 2.685-3.37l-.85-1.25c-1.038.717-2.213 1.918-3.035 3.625-.453-1.176-.579-2.243-.395-3.195.203-1.05.769-1.88 1.53-2.505M8.535 14.388q.063.164.135.332c.074.172.208.31.377.387q.35.162.688.277A9 9 0 0 0 9.218 17l-1.468-.326c.185-.843.457-1.605.785-2.286"
      />
    </svg>
  );
};
export default EcoEnergy;
