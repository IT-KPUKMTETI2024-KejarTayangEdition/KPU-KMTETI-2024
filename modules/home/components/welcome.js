import Link from "next/link";

export function Welcome() {
  return (
    <div className="text-background-dark">
      <article className="bg-primary-dark rounded-xl px-6 py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus nulla, ultricies eget eros eget, auctor
        tristique nibh. Ut in lobortis neque. Proin id eros id odio posuere suscipit. Cras sed risus non turpis interdum
        molestie. Praesent convallis est tortor, ut vehicula nulla suscipit fringilla. Morbi
      </article>
      <Link
        href="/"
        className="block mt-8 pt-1 text-2xl mx-auto w-fit px-8 border-y border-y-primary-light bg-gradient-to-r from-transparent via-primary-dark to-transparent"
      >
        COMING SOON
      </Link>
    </div>)
}