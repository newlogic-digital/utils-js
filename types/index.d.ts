declare module '@newlogic-digital/utils-js' {
	export function dataset(element: HTMLElement, name: string): {
		add: (...args: string[]) => void;
		remove: (...args: string[]) => void;
	};
	export function importScript(url: string): Promise<void>;
	export function importStyle(url: string): Promise<void>;
	export function supportsIsAttribute(name?: string): boolean;
	export function replaceScript(element: HTMLElement, ignoreAttributeName?: string | null): void;
	export function replaceScripts(element: HTMLElement, selectors?: string): void;
	export function replaceVars(element: HTMLElement, vars: object, delimiter?: string): void;
	export function fetchJson(url: string, options?: object): Promise<any>;
	export function fetchElement(element: HTMLElement, url: string, appendTo?: string): Promise<ChildNode>;
	export function getUrl(path: string, params?: object, origin?: string): string;
	export function getId(): string;
	export function dispatchCustomEvent(element: HTMLElement, event?: string, options?: object): void;
	export function toggleDarkMode(): void;

	export {};
}

//# sourceMappingURL=index.d.ts.map