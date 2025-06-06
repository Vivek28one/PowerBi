import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface QuickLinkCardProps {
  id: number
  logo: LucideIcon
  title: string
  description: string
}

const QuickLinkCard = ({ logo: Logo, title, description }: QuickLinkCardProps) => {
  return (
    <Card className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:rotate-x-6 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-y-12">
            <Logo className="h-6 w-6 text-white" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-lg font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-500 group-hover:text-gray-600">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default QuickLinkCard 