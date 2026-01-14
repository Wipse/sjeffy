# Header Scroll Gedrag - Functionaliteit Uitleg

## Doel

Een header die automatisch verschijnt en verdwijnt op basis van scroll richting, voor een betere gebruikerservaring.

## Gedrag

- Wanneer de gebruiker **naar beneden scrollt** (en voorbij de header hoogte is), verdwijnt de header naar boven
- Wanneer de gebruiker **naar boven scrollt** (in welke positie dan ook), verschijnt de header weer

## Technische Implementatie

### 1. State tracking

- `isScrollingDown`: Boolean die bijhoudt of er naar beneden wordt gescrolld
- `lastScrollY`: Laatste scroll positie om richting te bepalen
- `headerHeight`: 96px - minimale scroll afstand voordat header kan verbergen

### 2. Scroll logica

De `handleScroll` functie werkt als volgt:

```javascript
const handleScroll = () => {
	if (typeof window !== "undefined") {
		const currentScrollY = window.scrollY;

		// Vergelijk huidige scroll positie met vorige positie
		// Als currentScrollY > lastScrollY EN currentScrollY > headerHeight:
		//   → Gebruiker scrollt naar beneden, voorbij header → verberg header
		// Anders (scrollt naar boven of nog niet voorbij header):
		//   → Toon header

		if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
			isScrollingDown.value = true;
		} else {
			isScrollingDown.value = false;
		}

		// Update lastScrollY voor volgende vergelijking
		lastScrollY = currentScrollY;
	}
};
```

### 3. CSS Animatie

- Header heeft `position: fixed` en blijft altijd bovenaan
- Wanneer `isScrollingDown` true is: `-translate-y-full opacity-0` (schuift omhoog uit beeld)
- Wanneer `isScrollingDown` false is: `opacity-100` (volledig zichtbaar)
- Smooth transitions via `transition-all duration-300 ease-in-out`

```vue
<header class="fixed left-0 top-0 z-40 ... transition-all duration-300 ease-in-out" :class="[isScrollingDown ? '-translate-y-full opacity-0' : 'opacity-100']"></header>
```

### 4. Event Listeners

- `onMounted`: Voeg scroll event listener toe aan window
- `onBeforeUnmount`: Verwijder scroll event listener (belangrijk voor memory management)

```javascript
onMounted(() => {
	if (typeof window !== "undefined") {
		lastScrollY = window.scrollY;
		window.addEventListener("scroll", handleScroll);
	}
});

onBeforeUnmount(() => {
	if (typeof window !== "undefined") {
		window.removeEventListener("scroll", handleScroll);
	}
});
```

## Gebruikerservaring

- Bij naar beneden scrollen verdwijnt de header om meer content ruimte te geven
- Bij naar boven scrollen verschijnt de header direct, zodat navigatie altijd binnen handbereik is
- De header verbergt zich alleen na het voorbij scrollen van de eigen hoogte (96px), om te voorkomen dat deze flikkert bij kleine scroll bewegingen bovenaan de pagina

## Implementatie in Vue 3 / Nuxt

Deze functionaliteit is geïmplementeerd in `components/Header.vue` met Vue 3 Composition API en gebruikt native browser scroll events voor optimale performance.
