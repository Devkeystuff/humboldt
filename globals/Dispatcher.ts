import EventEmitter from "events";

const Dispatcher = new EventEmitter().setMaxListeners(2);

export { Dispatcher };
export const DispatcherEvents: { [eventName: string]: string } = {
  SELECT_BOUNDS: "SELECT_BOUNDS"
};