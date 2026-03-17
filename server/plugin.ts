import type {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '@kbn/core/server';

import type { OpTablePluginSetup, OpTablePluginStart } from './types';
import { defineRoutes } from './routes';

export class OpTablePlugin implements Plugin<OpTablePluginSetup, OpTablePluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('OpTable: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('OpTable: Started');
    return {};
  }

  public stop() {}
}
