import Link from "next/link"
import FrameworkCard from "@/components/framework-card"
import { Button } from "@/components/ui/button"
import type { Category } from "@/lib/types"

interface CategorySectionProps {
  category: Category
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {category.icon}
          <h3 className="text-xl font-semibold">{category.name}</h3>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/categories/${category.id}`}>View all</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {category.items.slice(0, 4).map((framework) => (
          <FrameworkCard key={framework.name} framework={framework} />
        ))}
      </div>
    </div>
  )
}

