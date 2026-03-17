import type { PluginInitializerContext } from '@kbn/core/server';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export async function plugin(initializerContext: PluginInitializerContext) {
  const { OpTablePlugin } = await import('./plugin');
  return new OpTablePlugin(initializerContext);
}

export type { OpTablePluginSetup, OpTablePluginStart } from './types';
