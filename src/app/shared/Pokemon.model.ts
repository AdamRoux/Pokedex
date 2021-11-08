export class Pokemon {
    public _name: string;
    public _url: string;
    public _description:string;


    private _isShown:boolean;

    constructor(name:string, url:string, description:string,isShown:boolean) {
        this._name = name
        this._url = url
        this._description = description
        this._isShown = isShown;
    }

        /**
     * Getter isShown
     * @return {boolean}
     */
	public get isShown(): boolean {
		return this._isShown;
	}

    /**
     * Setter isShown
     * @param {boolean} value
     */
	public set isShown(value: boolean) {
		this._isShown = value;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter url
     * @return {string}
     */
	public get url(): string {
		return this._url;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter url
     * @param {string} value
     */
	public set url(value: string) {
		this._url = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}
}