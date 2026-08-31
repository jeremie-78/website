interface MinimalGame {
	TITLE: string;
	CONSOLE: string;
}

export interface GameTemplate extends MinimalGame {
	REGION: string;
	LANGUAGE: string;
	EDITION: string;
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

export interface Game extends MinimalGame {
	REGION: string;
	LANGUAGE: string;
	EDITION: string;
	COMPLETE: boolean;
	CASE_TYPE: string;
	MISC: string | null;
}