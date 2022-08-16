import { TerminalIcon } from '@heroicons/react/solid';

interface Props {
	placement: 'NAVBAR' | 'SIDEBAR';
}

function AppTitle(props: Props) {
	//const conditionalVisibility = props.placement == 'NAVBAR' ? 'lg:hidden' : 'hidden lg:block mb-6';
	return (
		<a href='#' className='normal-case text-2xl font-bold'>
			<svg xmlns='http://www.w3.org/2000/svg' className='w-52' fill='none' viewBox='0 0 1123 208'>
				<path
					fill='#000'
					fillRule='evenodd'
					d='M21 51.8A20.8 20.8 0 0141.8 31h124.8a20.802 20.802 0 0120.8 20.8v104a20.799 20.799 0 01-20.8 20.8H41.8A20.799 20.799 0 0121 155.8v-104zm34.247 13.447a10.4 10.4 0 0114.706 0l31.2 31.2a10.402 10.402 0 010 14.706l-31.2 31.2a10.4 10.4 0 01-14.706-14.706L79.094 103.8 55.247 79.953a10.4 10.4 0 010-14.706zM114.6 124.6a10.401 10.401 0 00-7.354 17.754 10.401 10.401 0 007.354 3.046h31.2a10.401 10.401 0 007.354-17.754 10.401 10.401 0 00-7.354-3.046h-31.2z'
					clipRule='evenodd'
				></path>
				<path
					fill='#000'
					d='M256.045 150l-26.636-93.09h21.5l15.409 64.681h.773l17-64.682H302.5l16.955 64.818h.818l15.409-64.818h21.5L330.545 150h-19.181l-17.728-60.864h-.727L275.227 150h-19.182zm123.716 1.318c-4.454 0-8.424-.773-11.909-2.318-3.485-1.576-6.242-3.894-8.272-6.955-2-3.09-3-6.939-3-11.545 0-3.879.712-7.136 2.136-9.773 1.424-2.636 3.364-4.757 5.818-6.363 2.455-1.606 5.243-2.819 8.364-3.637a63.713 63.713 0 019.909-1.727c4.06-.424 7.333-.818 9.818-1.182 2.485-.394 4.288-.97 5.409-1.727 1.121-.758 1.682-1.879 1.682-3.364v-.272c0-2.88-.909-5.106-2.727-6.682-1.788-1.576-4.334-2.364-7.637-2.364-3.485 0-6.257.773-8.318 2.318-2.061 1.515-3.424 3.424-4.091 5.728L359.034 100c.909-4.242 2.697-7.91 5.364-11 2.666-3.121 6.106-5.515 10.318-7.182 4.242-1.697 9.151-2.545 14.727-2.545 3.879 0 7.591.454 11.137 1.363 3.575.91 6.742 2.319 9.5 4.228a20.55 20.55 0 016.59 7.363c1.607 2.97 2.41 6.53 2.41 10.682V150h-18.364v-9.682h-.546a19.7 19.7 0 01-4.5 5.773c-1.878 1.636-4.136 2.924-6.772 3.864-2.637.909-5.682 1.363-9.137 1.363zm5.546-13.363c2.848 0 5.363-.561 7.545-1.682 2.182-1.152 3.894-2.697 5.137-4.637 1.242-1.939 1.863-4.136 1.863-6.591v-7.409c-.606.394-1.439.758-2.5 1.091-1.03.303-2.197.591-3.5.864-1.303.242-2.606.47-3.909.682-1.303.182-2.485.348-3.545.5-2.273.333-4.258.863-5.955 1.591-1.697.727-3.015 1.712-3.954 2.954-.94 1.212-1.409 2.727-1.409 4.546 0 2.636.954 4.651 2.863 6.045 1.94 1.364 4.394 2.046 7.364 2.046zM434.102 150V80.182h18.773v12.182h.727c1.273-4.334 3.409-7.606 6.409-9.819 3-2.242 6.455-3.363 10.364-3.363.97 0 2.015.06 3.136.182 1.122.12 2.106.287 2.955.5v17.181c-.909-.272-2.167-.515-3.773-.727-1.606-.212-3.076-.318-4.409-.318-2.848 0-5.394.621-7.636 1.864a13.724 13.724 0 00-5.273 5.091c-1.273 2.181-1.909 4.697-1.909 7.545V150h-19.364zm52.375 26.182v-96h19.091v11.727h.864c.848-1.879 2.076-3.788 3.682-5.727 1.636-1.97 3.757-3.606 6.363-4.91 2.637-1.333 5.909-2 9.818-2 5.091 0 9.788 1.334 14.091 4 4.303 2.637 7.743 6.622 10.319 11.955 2.575 5.303 3.863 11.955 3.863 19.955 0 7.788-1.257 14.363-3.773 19.727-2.484 5.333-5.878 9.379-10.181 12.136-4.273 2.728-9.061 4.091-14.364 4.091-3.758 0-6.955-.621-9.591-1.863-2.606-1.243-4.742-2.803-6.409-4.682-1.667-1.909-2.939-3.833-3.818-5.773h-.591v37.364h-19.364zm18.955-61.091c0 4.151.576 7.773 1.727 10.864 1.152 3.09 2.818 5.5 5 7.227 2.182 1.697 4.833 2.545 7.955 2.545 3.151 0 5.818-.863 8-2.591 2.181-1.757 3.833-4.181 4.954-7.272 1.152-3.122 1.727-6.712 1.727-10.773 0-4.03-.56-7.576-1.681-10.636-1.122-3.061-2.773-5.455-4.955-7.182-2.182-1.727-4.864-2.591-8.045-2.591-3.152 0-5.819.833-8 2.5-2.152 1.666-3.803 4.03-4.955 7.091-1.151 3.06-1.727 6.666-1.727 10.818zm105.545-11v15.364h-42.454v-15.364h42.454zm9.443-30.955V56.91h76.455v16.227h-28.5V150H648.92V73.136h-28.5zm108.046 36.5V150h-19.364V56.91h18.818V92.5h.819c1.575-4.121 4.121-7.349 7.636-9.682 3.515-2.364 7.924-3.545 13.227-3.545 4.849 0 9.076 1.06 12.682 3.181 3.636 2.092 6.455 5.107 8.455 9.046 2.03 3.91 3.03 8.591 3 14.045V150h-19.364v-41c.03-4.303-1.061-7.652-3.273-10.046-2.182-2.393-5.242-3.59-9.182-3.59-2.636 0-4.969.56-7 1.681-2 1.122-3.575 2.758-4.727 4.91-1.121 2.121-1.697 4.681-1.727 7.681zm92.329 41.728c-7.181 0-13.363-1.455-18.545-4.364-5.152-2.939-9.121-7.091-11.909-12.455-2.788-5.393-4.182-11.772-4.182-19.136 0-7.182 1.394-13.485 4.182-18.909 2.788-5.424 6.712-9.651 11.773-12.682 5.091-3.03 11.06-4.545 17.909-4.545 4.606 0 8.894.742 12.863 2.227 4 1.454 7.485 3.651 10.455 6.59 3 2.94 5.333 6.637 7 11.092 1.667 4.424 2.5 9.606 2.5 15.545v5.318h-58.955v-12h40.728c0-2.787-.606-5.257-1.819-7.409a13.02 13.02 0 00-5.045-5.045c-2.121-1.242-4.591-1.864-7.409-1.864-2.939 0-5.546.682-7.818 2.046a14.34 14.34 0 00-5.273 5.409c-1.273 2.242-1.924 4.742-1.955 7.5v11.409c0 3.454.637 6.439 1.91 8.954 1.303 2.516 3.136 4.455 5.5 5.819 2.363 1.363 5.166 2.045 8.409 2.045 2.151 0 4.121-.303 5.909-.909 1.788-.606 3.318-1.515 4.591-2.727 1.272-1.212 2.242-2.697 2.909-4.455L852.432 130c-.909 4.303-2.773 8.061-5.591 11.273-2.788 3.182-6.394 5.666-10.818 7.454-4.394 1.758-9.47 2.637-15.228 2.637zM865.477 150V80.182h18.455V92.5h.818c1.455-4.09 3.879-7.318 7.273-9.682 3.394-2.364 7.454-3.545 12.182-3.545 4.787 0 8.863 1.197 12.227 3.59 3.363 2.364 5.606 5.576 6.727 9.637h.727c1.425-4 4-7.197 7.728-9.59 3.757-2.425 8.197-3.637 13.318-3.637 6.515 0 11.803 2.076 15.863 6.227 4.091 4.121 6.137 9.97 6.137 17.545V150h-19.318v-43.136c0-3.879-1.031-6.788-3.091-8.728-2.061-1.939-4.637-2.909-7.728-2.909-3.515 0-6.257 1.121-8.227 3.364-1.97 2.212-2.954 5.136-2.954 8.773V150h-18.773v-43.545c0-3.425-.985-6.152-2.955-8.182-1.939-2.03-4.5-3.046-7.681-3.046-2.152 0-4.091.546-5.819 1.637-1.697 1.06-3.045 2.56-4.045 4.5-1 1.909-1.5 4.151-1.5 6.727V150h-19.364zm148.573 1.364c-7.19 0-13.37-1.455-18.55-4.364-5.152-2.939-9.121-7.091-11.909-12.455-2.788-5.393-4.182-11.772-4.182-19.136 0-7.182 1.394-13.485 4.182-18.909 2.788-5.424 6.712-9.651 11.773-12.682 5.086-3.03 11.056-4.545 17.906-4.545 4.61 0 8.9.742 12.87 2.227 4 1.454 7.48 3.651 10.45 6.59 3 2.94 5.33 6.637 7 11.092 1.67 4.424 2.5 9.606 2.5 15.545v5.318h-58.954v-12h40.724c0-2.787-.6-5.257-1.81-7.409a13.1 13.1 0 00-5.05-5.045c-2.12-1.242-4.59-1.864-7.41-1.864-2.94 0-5.54.682-7.82 2.046-2.24 1.333-4 3.136-5.27 5.409-1.273 2.242-1.924 4.742-1.955 7.5v11.409c0 3.454.637 6.439 1.905 8.954 1.31 2.516 3.14 4.455 5.5 5.819 2.37 1.363 5.17 2.045 8.41 2.045 2.16 0 4.12-.303 5.91-.909 1.79-.606 3.32-1.515 4.59-2.727 1.28-1.212 2.25-2.697 2.91-4.455l17.91 1.182c-.91 4.303-2.77 8.061-5.59 11.273-2.79 3.182-6.39 5.666-10.82 7.454-4.39 1.758-9.47 2.637-15.22 2.637zm102.77-51.273l-17.73 1.091a9.124 9.124 0 00-1.95-4.091c-1-1.242-2.32-2.227-3.96-2.955-1.6-.757-3.53-1.136-5.77-1.136-3 0-5.53.636-7.59 1.91-2.06 1.242-3.09 2.908-3.09 5 0 1.666.66 3.075 2 4.226 1.33 1.152 3.62 2.076 6.86 2.773l12.64 2.546c6.79 1.393 11.85 3.636 15.18 6.727s5 7.151 5 12.182c0 4.575-1.35 8.591-4.05 12.045-2.66 3.455-6.33 6.152-11 8.091-4.63 1.909-9.98 2.864-16.04 2.864-9.24 0-16.61-1.925-22.09-5.773-5.46-3.879-8.65-9.152-9.59-15.818l19.04-1c.58 2.818 1.97 4.969 4.18 6.454 2.22 1.455 5.05 2.182 8.5 2.182 3.4 0 6.12-.651 8.19-1.954 2.09-1.334 3.15-3.046 3.18-5.137-.03-1.757-.78-3.197-2.23-4.318-1.45-1.152-3.7-2.03-6.73-2.636l-12.09-2.409c-6.82-1.364-11.89-3.728-15.23-7.091-3.3-3.364-4.95-7.652-4.95-12.864 0-4.485 1.21-8.349 3.64-11.59 2.45-3.243 5.89-5.743 10.31-7.5 4.46-1.758 9.67-2.637 15.64-2.637 8.82 0 15.76 1.863 20.82 5.59 5.09 3.728 8.06 8.804 8.91 15.228z'
				></path>
			</svg>
		</a>
	);
}

export default AppTitle;
