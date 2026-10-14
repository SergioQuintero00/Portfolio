export function Tags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="text-xs font-medium text-accent">
          {item}
        </li>
      ))}
    </ul>
  )
}
