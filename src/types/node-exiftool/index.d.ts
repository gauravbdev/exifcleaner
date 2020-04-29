// Original declaration file generated by dts-gen,
// modified afterwards to specify proper typings
// for used methods from the public interface

declare module "node-exiftool" {
	import { Readable } from "stream";

	export class ExiftoolProcess {
		constructor(bin: string);

		// resolve: (value?: any) => void, reject: (reason?: any

		close(): Promise<{ success: any; error: Error }>;

		open(encoding?: string, options?: object): Promise<number>;

		readMetadata(
			file: string | Readable,
			args: string[]
		): Promise<{ data: object[] | null; error: string | null }>;

		// 	writeMetadata(...args: any[]): void;

		// 	static captureRejectionSymbol: any;

		// 	static captureRejections: boolean;

		// 	static defaultMaxListeners: number;

		// 	static errorMonitor: any;

		// 	static init(opts: any): void;

		// 	static listenerCount(emitter: any, type: any): any;

		// 	static on(emitter: any, event: any): any;

		// 	static once(emitter: any, name: any): any;

		// 	static usingDomains: boolean;
		// }

		// export const EXIFTOOL_PATH: string;

		// export const events: {
		// 	EXIT: string;
		// 	OPEN: string;
		// };

		// export namespace ExiftoolProcess {
		// 	class EventEmitter {
		// 		constructor(opts: any);

		// 		addListener(type: any, listener: any): any;

		// 		emit(type: any, args: any): any;

		// 		eventNames(): any;

		// 		getMaxListeners(): any;

		// 		listenerCount(type: any): any;

		// 		listeners(type: any): any;

		// 		off(type: any, listener: any): any;

		// 		on(type: any, listener: any): any;

		// 		once(type: any, listener: any): any;

		// 		prependListener(type: any, listener: any): any;

		// 		prependOnceListener(type: any, listener: any): any;

		// 		rawListeners(type: any): any;

		// 		removeAllListeners(type: any, ...args: any[]): any;

		// 		removeListener(type: any, listener: any): any;

		// 		setMaxListeners(n: any): any;

		// 		static EventEmitter: any;

		// 		static captureRejectionSymbol: any;

		// 		static captureRejections: boolean;

		// 		static defaultMaxListeners: number;

		// 		static errorMonitor: any;

		// 		static init(opts: any): void;

		// 		static listenerCount(emitter: any, type: any): any;

		// 		static on(emitter: any, event: any): any;

		// 		static once(emitter: any, name: any): any;

		// 		static usingDomains: boolean;
		// 	}
	}
}