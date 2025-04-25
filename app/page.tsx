import {
	Filters,
	ProductCard,
	ProductsGroupList,
	TopBar,
} from '@/components/shared'
import { Container } from '@/components/shared/container'
import { Title } from '@/components/shared/title'

export default function Home() {
	return (
		<>
			<Container>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar></TopBar>

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title={'Пиццы'}
								categoryId={1}
								products={[
									{
										id: 1,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>

							<ProductsGroupList
								title={'Комбо'}
								categoryId={2}
								products={[
									{
										id: 1,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>
							<ProductsGroupList
								title={'Закуски'}
								categoryId={3}
								products={[
									{
										id: 1,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>
							<ProductsGroupList
								title={'Коктейли'}
								categoryId={4}
								products={[
									{
										id: 1,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: 'Сырная',
										imageUrl:
											'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
										price: 550,
										items: [{ price: 550 }],
									},
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
