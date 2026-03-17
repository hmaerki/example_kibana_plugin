import { OpTablePlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new OpTablePlugin();
}
export type { OpTablePluginSetup, OpTablePluginStart } from './types';
