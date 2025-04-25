'use client'

import React from 'react'
import { Title } from './title'
import { ProductCard } from './product-card'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

// Интерфейс для продукта
interface Product {
	id: number
	name: string
	imageUrl: string
	items: { price: number }[]
}

// Интерфейс для пропсов компонента
interface Props {
	title: string
	products: Product[]
	categoryId: number
	className?: string
	listClassNames?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	products,
	className,
	listClassNames,
	categoryId,
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = React.useRef<HTMLDivElement>(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	React.useEffect(() => {
		if (intersection && intersection.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection, setActiveCategoryId])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className={listClassNames || 'grid grid-cols-3 gap-[50px]'}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name} // Исправлено
						imageUrl={product.imageUrl}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	)
}
