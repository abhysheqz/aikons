import React from "react";
const Gymnastic: React.FC<
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
        d="M16 1.5a1 1 0 0 1 1 1v4.087c.207.15.38.333.518.519.329.442.55 1.003.656 1.554q.05.253.067.52c2.774.95 4.759 3.608 4.759 6.724C23 19.808 19.88 23 16 23a6.9 6.9 0 0 1-2.338-.405 1 1 0 1 1 .676-1.883A4.9 4.9 0 0 0 16 21c2.747 0 5-2.266 5-5.096 0-2.212-1.38-4.085-3.297-4.793-.21.242-.492.436-.857.536-.5.137-1.197.137-1.697 0-.702-.192-1.094-.736-1.268-1.292-.17-.54-.16-1.15-.053-1.696.107-.55.327-1.11.655-1.552.137-.186.31-.37.517-.52V2.5a1 1 0 0 1 1-1m-4.581 12.36a1 1 0 1 0-1.838-.791A7.2 7.2 0 0 0 9 15.904c0 1.077.237 2.1.663 3.017a1 1 0 1 0 1.814-.842A5.15 5.15 0 0 1 11 15.904c0-.73.15-1.42.418-2.045M1 15.903c0-3.117 1.985-5.774 4.759-6.724a4 4 0 0 1 .069-.521c.107-.55.327-1.11.655-1.552.138-.186.31-.37.517-.52V2.5a1 1 0 0 1 2 0v4.087c.207.15.38.333.518.519.329.442.55 1.003.656 1.554q.05.253.068.52c2.773.95 4.758 3.608 4.758 6.724C15 19.808 11.88 23 8 23s-7-3.192-7-7.096m12 0c0-2.212-1.38-4.085-3.297-4.793-.21.242-.492.436-.856.536-.5.137-1.198.137-1.698 0a1.7 1.7 0 0 1-.855-.535C4.38 11.821 3 13.693 3 15.904 3 18.734 5.253 21 8 21s5-2.266 5-5.096"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gymnastic;
