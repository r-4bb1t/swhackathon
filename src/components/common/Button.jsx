import cc from "classcat";

export default function Button({ outline, children, ...props }) {
  console.log(props.className);
  return (
    <button
      {...props}
      className={cc([
        "w-full btn text-white text-h2 btn-primary flex items-center h-auto disabled:bg-black-400 disabled:text-white",
        outline
          ? "btn-outline active:bg-primary hover:bg-primary hover:!text-white"
          : "outline-none",
        props.className,
      ])}
    >
      {children}
    </button>
  );
}
