import { BeachballConfig } from 'beachball';
import { getAllPackageInfo } from '../monorepo/index';
import { renderHeader, renderEntry } from './customRenderers';

const allPackageInfo = getAllPackageInfo();
const fluentConvergedPackagePaths = Object.values(allPackageInfo)
  .map(packageInfo => {
    if (packageInfo.packageJson.version.startsWith('9.') && !packageInfo.packageJson.private) {
      return packageInfo.packagePath;
    }

    return false;
  })
  .filter(Boolean) as string[];

const ignoreFluentConvergedScope = fluentConvergedPackagePaths.map(path => `!${path}`);
// Northstar is never published with beachball
const northstarScope = '!packages/fluentui/*';

// Default scope used to publish Fluent UI v8
const defaultScope = [northstarScope, ...ignoreFluentConvergedScope];

export const config: BeachballConfig = {
  disallowedChangeTypes: ['major', 'prerelease'],
  tag: 'latest',
  generateChangelog: true,
  // @ts-ignore
  scope: process.env.RELEASE_VNEXT ? fluentConvergedPackagePaths : defaultScope,
  changelog: {
    customRenderers: {
      renderHeader,
      renderEntry,
    },
    groups: [
      {
        masterPackageName: '@fluentui/react-components',
        changelogPath: 'packages/react-components',
        include: fluentConvergedPackagePaths,
      },
    ],
  },
};
