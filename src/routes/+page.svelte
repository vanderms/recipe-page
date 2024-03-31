<script lang="ts">
	import Sep from '$lib/ui/sep.svelte';

	const ingredients = [
		'2-3 large eggs',
		'Salt, to taste',
		'Pepper, to taste',
		'1 tablespoon of butter or oil',
		'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
	];

	type Instruction = {
		title: string;
		description: string;
	};

	const instructions: Instruction[] = [
		{
			title: 'Beat the eggs',
			description:
				'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'
		},
		{
			title: 'Heat the pan',
			description: 'Place a non-stick frying pan over medium heat and add butter or oil.'
		},
		{
			title: 'Cook the omelette',
			description:
				'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'
		},
		{
			title: 'Add fillings (optional)',
			description:
				'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'
		},
		{
			title: 'Fold and serve',
			description:
				'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'
		},
		{ title: 'Enjoy', description: 'Serve hot, with additional salt and pepper if needed.' }
	];
</script>

<main class="mb-10 md:bg-primary-100 md:m-0 md:py-[7.75rem]">
	<article class="bg-base-50 md:max-w-[46rem] md:mx-auto md:p-10 md:rounded-3xl">
		<figure>
			<img
				src="images/image-omelette.jpeg"
				alt="Omelette"
				class="h-[10.6875rem] w-full object-cover md:rounded-xl md:h-[18.75rem]"
			/>
		</figure>
		<header class="mt-10 mx-8 md:mx-0">
			<h1 class="heading-l text-neutral-800">Simple Omelette Recipe</h1>
			<p class="body-regular text-neutral-600 mt-6">
				An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
				cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
			</p>
		</header>
		<section class="mx-10 p-8 bg-secondary-100 mt-8 md:mx-0 md:p-7">
			<h2 class="heading-s text-secondary-800">Preparation time</h2>
			<div class="marked-list__item mt-4">
				<div class="w-1 h-1 bg-secondary-800 rounded-full"></div>
				<p class="body-regular text-neutral-600">
					<strong>Total:</strong> Approximately 10 minutes
				</p>
			</div>
			<div class="marked-list__item mt-2">
				<div class="w-1 h-1 bg-secondary-800 rounded-full"></div>
				<p class="body-regular text-neutral-600"><strong>Preparation: </strong> 5 minutes</p>
			</div>

			<div class="marked-list__item mt-2">
				<div class="w-1 h-1 bg-secondary-800 rounded-full"></div>
				<p class="body-regular text-neutral-600"><strong>Cooking:</strong> 5 minutes</p>
			</div>
		</section>
		<section class="mt-8 mx-8 md:mx-0">
			<h2 class="heading-m text-primary-800">Ingredients</h2>
			<ul class="grid gap-y-2 mt-6">
				{#each ingredients as ingredient}
					<li class="marked-list__item body-regular text-neutral-600">
						<span class="w-1 h-1 bg-primary-800 rounded-full"></span><span>{ingredient}</span>
					</li>
				{/each}
			</ul>
		</section>
		<Sep />
		<section class="mx-8 md:mx-0">
			<h2 class="heading-m text-primary-800">Instructions</h2>
			<ol class="grid gap-y-2 mt-6">
				{#each instructions as { title, description }}
					<li
						class="list-decimal pl-4 ml-6 marker:body-bold marker:text-primary-800 body-regular text-neutral-600"
					>
						<strong>{title}: </strong>
						{description}
					</li>
				{/each}
			</ol>
		</section>
		<Sep />
		<section class="mx-8 md:mx-0">
			<header>
				<h2 class="heading-m text-primary-800">Nutrition</h2>
				<p class="body-regular text-neutral-600 md:mt-6">
					The table below shows nutritional values per serving without the additional fillings.
				</p>
			</header>
			<table class="w-full mt-5">
				<tr class="h-12 table-row-border">
					<th scope="row" class="body-regular text-neutral-600 pl-8 text-left">Calories</th>
					<td class="body-bold text-primary-800">277kcal</td>
				</tr>
				<tr class="h-12 table-row-border">
					<th scope="row" class="body-regular text-neutral-600 pl-8 text-left">Carbs</th>
					<td class="body-bold text-primary-800">0g</td>
				</tr>
				<tr class="h-12 table-row-border">
					<th scope="row" class="body-regular text-neutral-600 pl-8 text-left">Protein</th>
					<td class="body-bold text-primary-800">20g</td>
				</tr>
				<tr class="h-12">
					<th scope="row" class="body-regular text-neutral-600 pl-8 text-left">Fat</th>
					<td class="body-bold text-primary-800">22g</td>
				</tr>
			</table>
		</section>
	</article>
</main>
