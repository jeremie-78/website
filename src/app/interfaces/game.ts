interface MinimalGame {
	TITLE: string;
	CONSOLE: string;
}

interface PrimaryGame extends MinimalGame {
	REGION: string;
	LANGUAGE: string;
	EDITION: string;
}

export interface GameTemplate extends PrimaryGame {
	COMPLETE: boolean | null;
	CASE_TYPE: string;
}

export interface GameSubmission extends MinimalGame {
	REGION?: string;
	LANGUAGE?: string;
	EDITION?: string;
	COMPLETE?: boolean;
	CASE_TYPE?: string;
	MISC?: string | null;
}

export interface Game extends PrimaryGame {
	COMPLETE: boolean;
	CASE_TYPE: string;
	MISC: string | null;
}