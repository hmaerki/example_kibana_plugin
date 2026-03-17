import type { NavigationPublicPluginStart } from '@kbn/navigation-plugin/public';

export interface OpTablePluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpTablePluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
